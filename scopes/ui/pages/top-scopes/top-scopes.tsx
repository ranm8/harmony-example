import React from 'react';
import classNames from 'classnames';
import { LoaderRibbon } from '@teambit/base-ui.loaders.loader-ribbon';
import { Error } from '@teambit/base-ui.input.error';
import { Header } from '@deepblue/scopes.ui.top-scopes.header';
import { ScopeList } from '@deepblue/scopes.ui.scopes.scopes-list';
import { capitalize } from '@deepblue/toolbox.string.capitalize';
import { useScopes } from '@deepblue/scopes.ui.hooks.use-scopes';
import styles from './top-scopes.module.scss';

export type TopScopesProps = {} & React.HTMLAttributes<HTMLDivElement>;
const owners = ['teambit'];

export const TopScopes = ({ className, ...rest }: TopScopesProps) => {
  const [scopes, loading, error] = useScopes(owners);
  if (!scopes?.length) return <LoaderRibbon active={loading} />;
  if (error) return <Error>{error}</Error>;

  return (
    <div className={classNames(styles.topScopes, classNames)} {...rest}>
      <Header
        title={capitalize(`top ${10} public scopes`)}
        description={capitalize(
          'These are the public scopes with most components'
        )}
      />
      <ScopeList list={scopes} />
    </div>
  );
};
