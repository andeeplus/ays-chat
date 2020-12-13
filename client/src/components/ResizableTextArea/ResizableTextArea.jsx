import React, { forwardRef, useEffect, useState } from 'react'
import { TextArea } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const ExtendedTextArea = styled(TextArea)`
  box-sizing: border-box;
  border-radius: 3px;
  resize: none;
  line-height: 20px;
  overflow: auto;
  height: auto;
  padding: 8px;
  & ::placeholder {
    color: gainsboro;
  }
`

const initTAState = {
  rows: 1,
  minRows: 1,
  maxRows: 10,
}

const ResizableTextarea = forwardRef(({ value, onChange, ...props }, ref) => {
  const [textAreaState, setTextAreaState] = useState(initTAState)

  const composedHandleChange = (event) => {
    const textareaLineHeight = 20
    const { minRows, maxRows } = textAreaState

    const previousRows = event.target.rows
    event.target.rows = minRows // reset number of rows in textarea
    console.dir(event.target)

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    onChange(event)
    setTextAreaState((state) => ({
      ...state,
      rows: currentRows < state.maxRows ? currentRows : state.maxRows,
    }))
  }

  useEffect(() => {
    if (!value) setTextAreaState(initTAState)
  }, [value])

  return (
    <ExtendedTextArea
      ref={ref}
      rows={textAreaState.rows}
      value={value}
      placeholder={'Enter your text here...'}
      onChange={composedHandleChange}
      {...props}
    />
  )
})

export default ResizableTextarea
