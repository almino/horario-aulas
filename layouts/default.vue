<template>
  <v-layout>
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
  </v-layout>
</template>
