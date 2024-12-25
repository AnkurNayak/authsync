import { motion } from "framer-motion";

export const InputComponent = ({
  label,
  type,
  val,
  id,
  onValChange,
  onValBlur,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-sm">{label}</label>
      <div
        className={`w-full border border-border rounded-md focus-within:border-primary overflow-hidden px-4 ${
          error && "border-warn"
        }`}
      >
        <input
          type={type}
          id={id}
          className="outline-none w-full my-3 bg-transparent"
          value={val}
          onBlur={onValBlur}
          onChange={onValChange}
        />
      </div>
      <div className="text-xs text-warn font-medium h-4">
        {error && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const OptionInputComponent = ({
  label,
  val,
  onValChange,
  onValBlur,
  id,
  error,
  options,
}) => {
  return (
    <div>
      <label className="font-medium text-sm">{label}</label>
      <select
        id={id}
        value={val}
        onChange={onValChange}
        onBlur={onValBlur}
        className={`mt-1 block w-full px-4 py-3 bg-transparent border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${
          error && "border-warn"
        }`}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="bg-transparent text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="text-xs text-warn font-medium h-4">
        {error && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.div>
        )}
      </div>
    </div>
  );
};
