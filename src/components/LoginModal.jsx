import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from '../hooks/useAuth';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const { login, signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      if (step === 1) {
        try {
          const response = await fetch('/api/send-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobile }),
          });
          if (response.ok) {
            setStep(2);
          } else {
            alert('Failed to send OTP. Please try again.');
          }
        } catch (error) {
          console.error('Error sending OTP:', error);
          alert('Failed to send OTP. Please try again.');
        }
      } else {
        try {
          const response = await fetch('/api/verify-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobile, otp }),
          });
          if (response.ok) {
            await login(email, mobile);
            onClose();
          } else {
            alert('Invalid OTP. Please try again.');
          }
        } catch (error) {
          console.error('Error verifying OTP:', error);
          alert('Failed to verify OTP. Please try again.');
        }
      }
    } else {
      if (step === 1) {
        try {
          const response = await fetch('/api/send-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobile }),
          });
          if (response.ok) {
            setStep(2);
          } else {
            alert('Failed to send OTP. Please try again.');
          }
        } catch (error) {
          console.error('Error sending OTP:', error);
          alert('Failed to send OTP. Please try again.');
        }
      } else {
        try {
          const response = await fetch('/api/verify-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobile, otp }),
          });
          if (response.ok) {
            await signup(name, email, mobile);
            onClose();
          } else {
            alert('Invalid OTP. Please try again.');
          }
        } catch (error) {
          console.error('Error verifying OTP:', error);
          alert('Failed to verify OTP. Please try again.');
        }
      }
    }
  };

  const renderForm = () => {
    if (step === 1) {
      return (
        <>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </>
      );
    } else {
      return (
        <Input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? 'Login' : 'Sign Up'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderForm()}
          <Button type="submit">{step === 1 ? 'Send OTP' : (isLogin ? 'Login' : 'Sign Up')}</Button>
        </form>
        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;