import { type BuildOptions, context } from 'esbuild'
import * as path from 'node:path'
import svgr from 'esbuild-plugin-svgr'

const buildOptions: BuildOptions = {
  entryPoints: [path.resolve(process.cwd(), 'demo/index.tsx')],
  outfile: path.resolve(process.cwd(), 'demo/public/assets/bundle.js'),
  bundle: true,
  logLevel: 'info',
  plugins: [svgr({ exportType: 'named' })]
}

const run = async (): Promise<void> => {
  const ctx = await context(buildOptions)
  await ctx.watch()
  await ctx.serve({
    servedir: path.resolve(process.cwd(), 'demo/public')
  })
}

run().catch(() => process.exit(1))
