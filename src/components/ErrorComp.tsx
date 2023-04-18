interface ErrorType {
  error: string;
}

export const ErrorComp = ({ error }: ErrorType) => {
  return (
    <div>
      <h2>Error: {error}</h2>
    </div>
  );
};
