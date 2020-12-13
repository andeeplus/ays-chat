import React, { useRef } from 'react'
import { Box, Icon, InputField } from '@andeeplus/aplus-ui'
import { useSelector } from 'react-redux'
import { usernameSelector } from '../../../../store/modules/user/selectors'

const CopyUrl = ({ roomId, ...props }) => {
  const urlRef = useRef(null)
  const username = useSelector(usernameSelector)

  function copyToClipboard(e) {
    urlRef.current.select()
    document.execCommand('copy')
    e.target.focus()
  }

  return (
    <Box
      title={`Copy Invite URL:\nhttps://radio.armyoursampler.com/invitation/${roomId}`}
      {...props}
    >
      <Icon px={2} size={16} icon="link" fill="gray.4" />
      <InputField
        onClick={copyToClipboard}
        ref={urlRef}
        defaultValue={`https://radio.armyoursampler.com/invitation/${roomId}?by=${username}`}
        width="40px"
        position="absolute"
        style={{ cursor: 'pointer' }}
        opacity={0}
      />
    </Box>
  )
}

export default CopyUrl
