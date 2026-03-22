import { useState } from "react";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import schoolIllustration from "@/assets/school-illustration.png";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-[750px] overflow-hidden border bg-card shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left - Branding */}
          <div className="flex flex-col items-center justify-center gap-4 p-6 md:w-[45%]">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">AnID</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Đăng nhập tài khoản quản trị viên
              <br />
              dành cho hệ thống tuyển sinh
            </p>
            <img
              src={schoolIllustration}
              alt="Minh họa trường học"
              className="mt-2 w-48 md:w-56"
            />
          </div>

          {/* Right - Form */}
          <div className="flex flex-col justify-center p-6 md:w-[55%]">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Email đăng nhập
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@truonghoc.edu.vn"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <a
                href="#"
                className="inline-block text-sm text-primary hover:underline"
              >
                Không thể đăng nhập?
              </a>

              <Button type="submit" className="w-full">
                Đăng nhập
              </Button>

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">
                    hoặc
                  </span>
                </div>
              </div>

              <Button variant="outline" type="button" className="w-full gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Đăng nhập bằng Google
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Chưa có tài khoản?{" "}
                <a href="#" className="font-medium text-primary hover:underline">
                  Đăng ký ngay
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-primary">Bảo mật thông tin</a>
            <a href="#" className="hover:text-primary">Trợ giúp</a>
          </div>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            © 2026 <span className="font-medium text-primary">AnID</span> - Hệ thống quản trị tuyển sinh
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Index;
