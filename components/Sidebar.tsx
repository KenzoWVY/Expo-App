import { View, Text } from 'react-native';
import { Link, usePathname, type Href} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SidebarItems {
  name: string;
  href: Href;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
}

const Sidebar = () => {

  const pathname = usePathname();

  const sidebarItems: SidebarItems[] = [
    { name: 'Search', href: '/search', iconName: 'search-outline' },
    { name: 'Saved', href: '/saved', iconName: 'bookmarks-outline' },
    { name: 'Messages', href: '/messages', iconName: 'chatbox-outline' },
    { name: 'Lease', href: '/lease', iconName: 'business-outline' },
    { name: 'Profile', href: '/profile', iconName: 'person-circle-outline' },
  ];

  return (
    <View style={{
      height: '100%',
      width: 250,
      flexDirection: 'row',
      borderRightWidth: 1,
      borderRightColor: '#E2E2E2',
      backgroundColor: '#F9F9F9',
    }}>

      <View style={{
        padding: 20,
      }}>

        <View style={{
            gap: 20
        }}>

          {sidebarItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>

                <Ionicons name={item.iconName} size={30} color={active ? '#007AFF' : '#333'} style={{ marginRight: 10 }} />

                <Text style={{ color: active ? '#007AFF' : '#8E8E93', fontSize: 18 }}>{item.name}</Text>

              </Link>
            );
          })}

        </View>

      </View>

    </View>
  );
};

export default Sidebar;