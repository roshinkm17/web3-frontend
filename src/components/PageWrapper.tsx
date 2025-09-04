export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-dvh w-dvw flex items-center justify-center'>
      {children}
    </div>
  );
};
