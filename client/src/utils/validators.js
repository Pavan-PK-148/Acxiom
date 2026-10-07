export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  // Enforces 10-digit mobile pattern
  const re = /^[0-9]{10}$/;
  return re.test(String(phone));
};

export const validateOpportunity = ({ amount, probability, expectedCloseDate }) => {
  if (Number(amount) <= 0) {
    return 'Opportunity Amount must be greater than 0.';
  }
  if (Number(probability) < 0 || Number(probability) > 100) {
    return 'Probability must be between 0 and 100.';
  }
  if (new Date(expectedCloseDate) < new Date().setHours(0, 0, 0, 0)) {
    return 'Expected Close Date cannot be in the past.';
  }
  return null;
};

export const validateFollowUpDate = (dateStr) => {
  if (new Date(dateStr) < new Date().setHours(0, 0, 0, 0)) {
    return 'Follow-Up Date cannot be earlier than today.';
  }
  return null;
};