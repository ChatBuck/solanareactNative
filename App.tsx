/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useState, useEffect } from 'react';
import { Keypair, Connection, clusterApiUrl} from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { SolanaMobileWalletAdapter, createDefaultAddressSelector, createDefaultAuthorizationResultCache } from '@solana-mobile/wallet-adapter-mobile'
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';




const App = () => {

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
        // new UnsafeBurnerWalletAdapter(),
        new PhantomWalletAdapter(),
    ],
    []
);

  return (
    // <ConnectionProvider endpoint={clusterApiUrl(WalletAdapterNetwork.Devnet)}>
    //     <WalletProvider wallets={wallets} autoConnect>
    //         <MyApp />
    //     </WalletProvider>
    // </ConnectionProvider>
    <Text>Hello</Text>
  );
};

export default App;
