import { useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/Input/Input";
import { Button } from "../../../../shared/ui/Button/Button";
import styles from "./Coupon.module.scss";
import showAlert from "../../../../widgets/Alert/Alert";

export const Coupon = () => {
  const methods = useForm({ mode: "onChange" });
  const {
    register,
    setValue,
    formState: { errors },
  } = methods;

  const handleCuppon = (e) => {
    e.preventDefault(); 
    showAlert('Купон применен!');
  };

  return (
    <form className={styles.container}>
      <Input
        name="coupon"
        register={register}
        setValue={setValue}
        placeholder="Добавить купон"
        error={errors.name}
      />
      <Button type="submit" onClick={handleCuppon}>Применить купон</Button>
    </form>
  );
};