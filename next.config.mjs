import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
  staticImage: true,
})

export default withNextra({
  reactStrictMode: true,
})
