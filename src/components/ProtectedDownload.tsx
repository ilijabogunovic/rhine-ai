import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProtectedDownloadProps {
  href: string;
  filename: string;
  password: string;
  children: React.ReactNode;
}

const ProtectedDownload = ({ href, filename, password, children }: ProtectedDownloadProps) => {
  const [open, setOpen] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
    setInputPassword("");
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setOpen(false);
      // Trigger download
      const link = document.createElement("a");
      link.href = href;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className="text-accent-vibrant hover:underline cursor-pointer"
      >
        {children}
      </a>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Password Required</DialogTitle>
            <DialogDescription>
              Enter the password to download {filename}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
                setError(false);
              }}
              className={error ? "border-red-500" : ""}
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-500">Incorrect password</p>
            )}
            <Button type="submit" className="w-full">
              Download
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProtectedDownload;
