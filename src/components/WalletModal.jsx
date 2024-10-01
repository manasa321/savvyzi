import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCashback, withdrawCashback } from '../services/paymentService';

const WalletModal = ({ isOpen, onClose }) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const { data: cashback, isLoading, refetch } = useQuery({
    queryKey: ['cashback'],
    queryFn: fetchCashback,
  });

  const withdrawMutation = useMutation({
    mutationFn: withdrawCashback,
    onSuccess: () => {
      refetch();
      setWithdrawAmount('');
    },
  });

  const handleWithdraw = () => {
    if (parseFloat(withdrawAmount) > 0 && parseFloat(withdrawAmount) <= cashback) {
      withdrawMutation.mutate(parseFloat(withdrawAmount));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Wallet</DialogTitle>
          <DialogDescription>
            View your cashback and withdraw funds
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-lg font-semibold">
            Available Cashback: ₹{isLoading ? '...' : cashback.toFixed(2)}
          </p>
          <div className="mt-4">
            <Input
              type="number"
              placeholder="Enter amount to withdraw"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleWithdraw} disabled={withdrawMutation.isLoading}>
              {withdrawMutation.isLoading ? 'Processing...' : 'Withdraw'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;