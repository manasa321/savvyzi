// Mock data for cashback
let userCashback = 500; // Initial cashback amount

export const fetchCashback = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return userCashback;
};

export const withdrawCashback = async (amount) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (amount <= userCashback) {
    userCashback -= amount;
    return { success: true, message: `Successfully withdrawn ₹${amount}` };
  } else {
    throw new Error('Insufficient funds');
  }
};

export const processPurchase = async (amount, affiliateLink) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Calculate cashback (e.g., 5% of purchase amount)
  const cashbackAmount = amount * 0.05;
  userCashback += cashbackAmount;
  
  return { 
    success: true, 
    message: `Purchase successful. Cashback of ₹${cashbackAmount} added to your wallet.`,
    cashbackAmount
  };
};