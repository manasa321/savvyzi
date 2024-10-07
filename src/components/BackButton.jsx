import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BackButton = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
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