export function Input(props) {
  const { id, label, error, onChange,type } = props;

  //Signup sayfasindaki her form elementi icin ortak bir kontrol mekanizmasi olusturmus olduk

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        className={error ? "form-control is-invalid" : "form-control"}
        onChange={onChange}
        type={type}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
