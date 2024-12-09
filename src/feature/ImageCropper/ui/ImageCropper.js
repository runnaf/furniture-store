import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../lib/cropImage';
import { Upload, Save } from 'lucide-react';
import styles from './ImageCropper.module.scss';
import { Text } from '../../../shared/ui/Text/Text';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { data } from '../../../shared/libs/validation/errors/data';
import { Textarea } from '../../../shared/ui/Textarea/Textarea';
import { Checkbox } from '../../../shared/ui/Checkbox/Checkbox';

const ImageCropper = ({aspectRatio}) => {
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const methods = useForm({mode: "onSubmit" })
    const { register, handleSubmit, reset, formState: { errors } } = methods;

    const onSubmit = () => {
        reset()
    }
    
    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels); 
    }, [])


    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
        };
        reader.readAsDataURL(e.target.files[0])
        }
    }


    const handleSave = async () => {
        try {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        setCroppedImage(croppedImage)
        } catch (e) {
        console.error(e)
        }
    }

    return (
        <FormProvider {...methods}>
            <form 
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stack
                    direction='column'
                    align='alignCenter'
                    gap='16'
                    className={styles.image_cropper}
                >
                    {!image ? (
                        <Stack className={styles.upload_container}>
                                <Button
                                    className={styles.upload_button}
                                    onClick={() => document.getElementById('file-upload').click()}
                                >
                                    <Upload size={24} />
                                    <Text size='18'>Загрузить изображение</Text>
                                </Button>
                                <Input
                                    id="file-upload"
                                    name='file'
                                    register={register}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className={styles.hidden_input}
                                />
                        </Stack>
                    ) : (
                    <Stack className={styles.cropper_container}>
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={aspectRatio}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                        <Stack 
                            align='alignCenter'
                            justify='justifyCenter'
                            className={styles.controls}
                        >
                            <Input
                                name='range'
                                register={register}
                                type="range"
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                onChange={(e) => setZoom(e.target.value)}
                                className={styles.zoom_slider}
                            />
                            <Button 
                                type='submit'
                                className={styles.save_button} 
                                onClick={handleSave}
                            >
                                <Save size={20} />
                                <Text>Обрезать</Text>
                            </Button>
                        </Stack>
                    </Stack>)}

                    {croppedImage && (
                        <Stack 
                            gap='16'
                            className={styles.preview}
                        >
                            <img src={croppedImage} alt='обрезанное изображение'/>
                            <Textarea
                                label="Описание товара"
                                type="text"
                                placeholder="Введите описание товара"
                                name="alt"
                                register={register}
                                options={{
                                    required: data.required,
                                    minLength: {
                                        value: 30,
                                        message: data.errors.textareaLength,
                                    }
                                }}
                                error={errors.alt}
                            />
                            <Stack
                                gap='12'
                                direction='column'
                            >
                                <Text>Цвет</Text>
                                <Stack>
                                    Выбор цвета
                                </Stack>
                            </Stack>
                        </Stack>
                    )}
                </Stack>
            </form>
        </FormProvider>
    )
}

export default ImageCropper;