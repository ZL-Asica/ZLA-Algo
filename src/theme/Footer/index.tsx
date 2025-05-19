import type { WrapperProps } from '@docusaurus/types'
import type FooterType from '@theme/Footer'
import Footer from '@theme-original/Footer'
import React from 'react'

type Properties = WrapperProps<typeof FooterType>

export default function FooterWrapper(
  properties: Properties,
): React.ReactElement {
  return (
    <>
      <Footer {...properties} />
    </>
  )
}
