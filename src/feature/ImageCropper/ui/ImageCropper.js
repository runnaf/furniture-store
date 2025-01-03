import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../lib/cropImage';
import { Upload, Save } from 'lucide-react';
import { Text } from '../../../shared/ui/Text/Text';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';
import { data } from '../../../shared/libs/validation/errors/data';
import { Textarea } from '../../../shared/ui/Textarea/Textarea';
import { Selected } from '../../../entities/Selected/Selected';
import styles from './ImageCropper.module.scss';
import { dataColor } from '../lib/data';

export const ImageCropper = ({id, aspectRatio, product, formMethods}) => {
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const { register, reset, trigger, formState: { errors } } = formMethods;

    const saveElement = async () => {
        const isValid = await trigger('alt')
        if (isValid) {
            setImage(null)
            setCroppedImage(null)
            setCrop({ x: 0, y: 0 })
            setZoom(1)
            reset({ alt: '' })
        }
    }
    
    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels); 
    }, [])


    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
        }
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

    const selectedOption = 'blue'

    const handleSortSelect = (value, label) => {
        console.log(value, label)
    }

    return (
        <Stack 
            direction='column'
            align='alignCenter'
            gap='16'
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
                                    type="button"
                                    className={styles.upload_button}
                                    onClick={() => document.getElementById(`file-upload-${id}`).click()}
                                >
                                    <Upload size={24} />
                                    <Text size='18'>Загрузить изображение</Text>
                                </Button>
                                <Input
                                    id={`file-upload-${id}`}
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
                                type="button"
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
                            <Stack
                                direction='column'
                                max
                                className={styles.discription_container}
                            >
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
                                {product && 
                                <Selected 
                                    sortOptions={dataColor}
                                    selectedOption={selectedOption}
                                    onSortChange={handleSortSelect}
                                />}
                            </Stack>
                        </Stack>
                    )}
                </Stack>
                <Button
                    type='button'
                    onClick={saveElement}
                    className={styles.save_element}>
                    Сохранить элемент
                </Button>
                {/* <ul className={styles.saved_elements}>
                    {savedElements.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={`Сохранённое изображение ${index}`} />
                            <Text>{item.description}</Text>
                        </li>
                    ))}
                </ul> */}
        </Stack>
    )
}