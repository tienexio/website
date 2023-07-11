// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white'
      }
    }
  },
  components: {
    Link: {
        baseStyle: {
            _focus: {
                boxShadow: 'none'
            }
        }
    }
  }
})
