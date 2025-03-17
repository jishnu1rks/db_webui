import React, {useState} from 'react'
import { Button } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { plusIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';

const button = ({text}: {text: string}) => {
    const [isDisabled, setIsDisabled] = useState(false);
  return (
    <Button svgIcon={plusIcon} type="button" disabled={isDisabled}>
    {text}
  </Button>
  )
}

export default button