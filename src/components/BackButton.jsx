import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BackButton = ({ onClick, className = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={`p-2 ${className}`}
    >
      <ChevronLeft className="h-6 w-6" />
    </Button>
  );
};

export default BackButton;