import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '../lib/globalProvider';
import { Slot, Redirect } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function HomeIndex() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full justify-center items-center">
        <ActivityIndicator className='text-primary-300 size="large' />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
