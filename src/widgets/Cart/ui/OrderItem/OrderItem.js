import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";

export const OrderItem = ({title, quantity}) => {
  return (
    <Stack justify="justifyBetween">
      <Text>{title}</Text>
      <Text>{quantity}</Text>
    </Stack>
  )
}
