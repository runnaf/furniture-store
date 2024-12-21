import { Card } from "../../../../entities/Card/ui/Card/Card"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"

export const ProductEdit = () => {
    return(
        <Stack
            direction='column'
            align='alignCenter'
            gap='32'
        >
            <Card view='extended'/>
            <Stack
                gap='16'
            >
                <Button
                    color="secondary"
                >
                    Удалить
                </Button>
                <Button>
                    Редактировать
                </Button>
            </Stack>
        </Stack>
    )
}