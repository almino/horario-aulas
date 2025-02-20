<template>
  <v-app>
    <AppBar />
    <v-navigation-drawer>
      <v-list>
        <v-list-item
          title="Navigation drawer"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
