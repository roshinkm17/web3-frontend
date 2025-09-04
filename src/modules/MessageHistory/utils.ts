export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const truncateMessage = (message: string, maxLength: number = 50) => {
  return message.length > maxLength
    ? `${message.substring(0, maxLength)}...`
    : message;
};
