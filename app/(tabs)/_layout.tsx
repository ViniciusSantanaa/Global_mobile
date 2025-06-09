import { Stack } from 'expo-router';

export default function Layout() {
  return (  
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'FloodSafe',
          headerStyle: {
            backgroundColor: '#FFF9F9',
            height: 80,
          },
          headerTitleStyle: {
            color: '#2c3e50',
            fontSize: 30,
            fontWeight: 'bold',
          },
        }}
      />
    <Stack.Screen
      name="home"
      options={{
        title: 'FloodSafe',
        headerStyle: {
          backgroundColor: '#FFF9F9',
          height: 80,
        },
        headerTitleStyle: {
          color: '#2c3e50',
          fontSize: 30,
          fontWeight: 'bold',
        },
      }}
    />

    <Stack.Screen
          name="mapas"
          options={{
            title: 'FloodSafe',
            headerStyle: {
              backgroundColor: '#FFF9F9',
              height: 80,
            },
            headerTitleStyle: {
              color: '#2c3e50',
              fontSize: 30,
              fontWeight: 'bold',
            },
          }}
        />

    <Stack.Screen
              name="alertas"
              options={{
                title: 'FloodSafe',
                headerStyle: {
                  backgroundColor: '#FFF9F9',
                  height: 80,
                },
                headerTitleStyle: {
                  color: '#2c3e50',
                  fontSize: 30,
                  fontWeight: 'bold',
                },
              }}
            />

    <Stack.Screen
                  name="sobre"
                  options={{
                    title: 'FloodSafe',
                    headerStyle: {
                      backgroundColor: '#FFF9F9',
                      height: 80,
                    },
                    headerTitleStyle: {
                      color: '#2c3e50',
                      fontSize: 30,
                      fontWeight: 'bold',
                    },
                  }}
                />
    <Stack.Screen
                  name="dashboard"
                  options={{
                    title: 'FloodSafe',
                    headerStyle: {
                      backgroundColor: '#FFF9F9',
                      height: 80,
                    },
                    headerTitleStyle: {
                      color: '#2c3e50',
                      fontSize: 30,
                      fontWeight: 'bold',
                    },
                  }}
                />
    </Stack>
  )
}
