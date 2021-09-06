const path = require('path')
const fs = require('fs')

const providersPath = path.join(process.cwd(), '/src/providers')

const files = fs.readdirSync(providersPath, 'utf8')

const providers = files.map((file) => {
  const strippedProviderName = file.substring(0, file.indexOf('.'));
  return `"${strippedProviderName}"`;
})

const exportOAuthProviderType = `export type OAuthProviderType = ${providers.join(' | ')}`

fs.writeFileSync(path.join(providersPath, 'oauth-types.ts'), exportOAuthProviderType)