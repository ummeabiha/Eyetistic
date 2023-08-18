import './AlertBox.css'; 

export default function AlertBox({ open, onClose, children }){
  if (!open) return null;

  return (
    <div className="alert-box-background">
      <div className="alert-box">
        {children}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
