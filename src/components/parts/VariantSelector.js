import '../../styles/App.scss';
const VariantOptions = ({
  handleChange,
  product,
  getOption,
  disabled,
  hidden,
}) => {
  const { options } = product;
  const option = options[getOption];
  const label = option.name;

  return (
    <form className='variant-form' hidden={hidden || false}>
      <select
        className='variant'
        disabled={disabled || false}
        defaultValue='Choose'
        onChange={(e) => handleChange({ [label]: e.target.value })}
      >
        <option value='Choose' disabled={true}>
          Choose
        </option>
        {option.values.map((o) => (
          <option key={`prod_variant_${o.value}_${label}`} value={o.value}>
            {o.value}
          </option>
        ))}
      </select>
    </form>
  );
};

export default VariantOptions;
