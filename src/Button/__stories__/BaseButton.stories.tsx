import type { Meta, Story } from '@storybook/react';
import { BaseButton, BaseButtonProps } from '..';

const meta: Meta<BaseButtonProps> = {
    title: 'Components/Button',
    component: BaseButton,
};

export default meta;

export const Default: Story<Partial<BaseButtonProps>> = args => {
    return (
        <BaseButton {...args} />
    )
};