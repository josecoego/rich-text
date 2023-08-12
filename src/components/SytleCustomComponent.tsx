const StyleCustomComponent = ({ plainStyle }: { plainStyle: string }) => {
  if (!plainStyle) return null;
  return <style>{plainStyle}</style>;
};

export default StyleCustomComponent;
