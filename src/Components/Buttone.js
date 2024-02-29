import {Button} from 'native-base';
import React from 'react';

function Buttone({mt, bg, children, onPress, w}) {
  return (
    <Button
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      w={w}
      _text={{
        color: '#1E1E1E',
        fontWeight: 'bold',
        fontSize: '19',
      }}
      _pressed={{bg: bg}}
      onPress={onPress}>
      {children}
    </Button>
  );
}

export default Buttone;
