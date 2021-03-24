import { Aspect } from '@teambit/harmony';

export type SymphonyReactConfig = {
  /**
   * host to the symphony gateway.
   */
  symphonyGatewayUrl: string;
};

export const SymphonyReactAspect = Aspect.create({
  id: 'deepblue.scopes/envs.mfe-react',
  defaultConfig: {
    symphonyGatewayUrl: 'https://symphony.bit.dev/graphql',
  },
});
