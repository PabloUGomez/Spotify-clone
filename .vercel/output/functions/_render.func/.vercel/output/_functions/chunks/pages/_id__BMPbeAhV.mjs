/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderSlot, h as renderHead, i as renderTransition } from '../astro_C4b2sq84.mjs';
import 'kleur/colors';
import 'html-escaper';
import cn from 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { create } from 'zustand';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" }
};

const playlists = [
  {
    id: "1",
    albumId: 1,
    title: "Classical Guitar",
    color: colors.yellow,
    cover: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia", "Julian Bream"]
  },
  {
    id: "2",
    albumId: 2,
    title: "Chillhop Essentials",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes", "J Dilla"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Indie Pop Vibes",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service", "Death Cab for Cutie"]
  },
  {
    id: "4",
    albumId: 4,
    title: "Funk Grooves",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown", "Parliament-Funkadelic"]
  },
  {
    id: "5",
    albumId: 5,
    title: "EDM Party Anthems",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii", "Martin Garrix"]
  },
  {
    id: "6",
    albumId: 6,
    title: "Alternative Rock Hits",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana", "Radiohead"]
  },
  {
    id: "7",
    albumId: 7,
    title: "Indie Rock Anthems",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys", "The Strokes"]
  },
  {
    id: "8",
    albumId: 8,
    title: "Electronic Dance Beats",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris", "David Guetta"]
  },
  {
    id: "9",
    albumId: 9,
    title: "Reggae Vibes",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley", "Toots and the Maytals"]
  },
  {
    id: "10",
    albumId: 10,
    title: "90s Throwback Hits",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears", "Backstreet Boys"]
  },
  {
    id: "11",
    albumId: 11,
    title: "Soft Acoustic Folk",
    color: colors.yellow,
    cover: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan", "Simon & Garfunkel"]
  },
  {
    id: "12",
    albumId: 12,
    title: "Peaceful Piano",
    color: colors.yellow,
    cover: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma", "Ludovico Einaudi"]
  },
  {
    id: "13",
    albumId: 13,
    title: "Motivational Workout Mix",
    color: colors.yellow,
    cover: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem", "Imagine Dragons"]
  },
  {
    id: "14",
    albumId: 14,
    title: "Soothing Spa Sounds",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds", "Relaxing Music"]
  },
  {
    id: "15",
    albumId: 15,
    title: "Country Classics",
    color: colors.yellow,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash", "Dolly Parton"]
  },
  {
    id: "16",
    albumId: 16,
    title: "Latin Party Hits",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira", "Marc Anthony"]
  },
  {
    id: "17",
    albumId: 17,
    title: "Soulful R&B Grooves",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye", "Aretha Franklin"]
  },
  {
    id: "18",
    albumId: 18,
    title: "Hip Hop Essentials",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z", "Kendrick Lamar"]
  },
  {
    id: "19",
    albumId: 19,
    title: "Rock Ballads",
    color: colors.yellow,
    cover: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi", "Guns N' Roses"]
  },
  {
    id: "20",
    albumId: 20,
    title: "Guitar Legends",
    color: colors.yellow,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix", "Eric Clapton"]
  }
];
const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more"
}));
const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}));
const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
];
const songs = [
  {
    id: 1,
    albumId: 1,
    title: "Prelude in D Major",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Masters of Classical Guitar",
    duration: "3:15"
  },
  {
    id: 2,
    albumId: 1,
    title: "Recuerdos de la Alhambra",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "The Classical Guitar Collection",
    duration: "5:45"
  },
  {
    id: 3,
    albumId: 1,
    title: "Asturias (Leyenda)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Classical Guitar Essentials",
    duration: "6:55"
  },
  {
    id: 4,
    albumId: 1,
    title: "Cavatina",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "Legendary Guitarists",
    duration: "4:20"
  },
  {
    id: 5,
    albumId: 1,
    title: "Romance",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Spanish Guitar Classics",
    duration: "3:30"
  },
  {
    id: 6,
    albumId: 1,
    title: "Capricho Árabe",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "The Best of Classical Guitar",
    duration: "5:10"
  },
  {
    id: 7,
    albumId: 1,
    title: "Gymnopédie No. 1",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Masterpieces for Classical Guitar",
    duration: "4:25"
  },
  {
    id: 8,
    albumId: 1,
    title: "Spanish Romance (Romanza)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "Classical Guitar Virtuosos",
    duration: "2:55"
  },
  {
    id: 9,
    albumId: 1,
    title: "Lágrima",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Greatest Classical Guitar Hits",
    duration: "3:40"
  },
  {
    id: 10,
    albumId: 1,
    title: "Canción del Mariachi (Desperado Theme)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "Modern Classical Guitar",
    duration: "4:15"
  },
  {
    id: 11,
    albumId: 1,
    title: "Capricho Catalán (Suite Española No. 5)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Classical Guitar Serenades",
    duration: "3:55"
  },
  {
    id: 12,
    albumId: 1,
    title: "Asturias (Prelude)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "Classic Guitar Masterpieces",
    duration: "6:30"
  },
  {
    id: 13,
    albumId: 1,
    title: "Spanish Dance No. 5 (Andaluza)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Ultimate Classical Guitar Collection",
    duration: "4:10"
  },
  {
    id: 14,
    albumId: 1,
    title: "La Catedral (Preludio - Andante Solemne - Allegro Solemne)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "Classic Guitar Solos",
    duration: "7:20"
  },
  {
    id: 15,
    albumId: 1,
    title: "Aranjuez, ma pensée (Theme from Concierto de Aranjuez)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Essential Guitar Classics",
    duration: "5:00"
  },
  {
    id: 16,
    albumId: 1,
    title: "Malagueña",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "Timeless Classical Guitar",
    duration: "4:45"
  },
  {
    id: 17,
    albumId: 1,
    title: "Recuerdos de la Infancia (Homenaje a Antonio Jiménez Manjón)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Romantic Guitar Melodies",
    duration: "3:25"
  },
  {
    id: 18,
    albumId: 1,
    title: "Leyenda (Asturias)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "The Best of Andrés Segovia",
    duration: "6:10"
  },
  {
    id: 19,
    albumId: 1,
    title: "Capricho Arabe (Serenata)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Andrés Segovia"],
    album: "Guitar Virtuosos: Masters of the Six Strings",
    duration: "5:35"
  },
  {
    id: 20,
    albumId: 1,
    title: "Lágrima (Prelude)",
    image: "https://i.scdn.co/image/ab67706f00000002fe11c740a130b5c4f9e28e4c",
    artists: ["Julian Bream"],
    album: "The Ultimate Classical Guitar Album",
    duration: "3:00"
  },
  {
    id: 1,
    albumId: 2,
    title: "A Day by Your Side",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Modal Soul",
    duration: "4:28"
  },
  {
    id: 2,
    albumId: 2,
    title: "Light on the Land",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "Donuts",
    duration: "2:33"
  },
  {
    id: 3,
    albumId: 2,
    title: "Aurora Borealis",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Metaphorical Music",
    duration: "3:45"
  },
  {
    id: 4,
    albumId: 2,
    title: "Night Walks",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "The Shining",
    duration: "4:17"
  },
  {
    id: 5,
    albumId: 2,
    title: "Sunset Serenade",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Spiritual State",
    duration: "5:02"
  },
  {
    id: 6,
    albumId: 2,
    title: "Dawn's Embrace",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "The Diary",
    duration: "3:20"
  },
  {
    id: 7,
    albumId: 2,
    title: "Lunar Lullaby",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Modal Soul Classics II",
    duration: "4:50"
  },
  {
    id: 8,
    albumId: 2,
    title: "Cloud Drifts",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "Welcome 2 Detroit",
    duration: "3:57"
  },
  {
    id: 9,
    albumId: 2,
    title: "Misty Morning Melodies",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Hydeout Productions 2nd Collection",
    duration: "3:10"
  },
  {
    id: 10,
    albumId: 2,
    title: "Cityscape Dreams",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "The Diary",
    duration: "4:25"
  },
  {
    id: 11,
    albumId: 2,
    title: "Zen Garden Groove",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Modal Soul Classics II",
    duration: "4:00"
  },
  {
    id: 12,
    albumId: 2,
    title: "Cherry Blossom Chill",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "Welcome 2 Detroit",
    duration: "3:35"
  },
  {
    id: 13,
    albumId: 2,
    title: "Moonlit Melancholy",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Metaphorical Music",
    duration: "4:15"
  },
  {
    id: 14,
    albumId: 2,
    title: "Sundown Serenade",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "The Shining",
    duration: "5:10"
  },
  {
    id: 15,
    albumId: 2,
    title: "Midnight Mood Music",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Spiritual State",
    duration: "3:30"
  },
  {
    id: 16,
    albumId: 2,
    title: "Eternal Sunset",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "Donuts",
    duration: "4:45"
  },
  {
    id: 17,
    albumId: 2,
    title: "Dreamy Dusk",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Modal Soul",
    duration: "3:20"
  },
  {
    id: 18,
    albumId: 2,
    title: "Harbor Haze",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "The Diary",
    duration: "4:10"
  },
  {
    id: 19,
    albumId: 2,
    title: "Twilight Tranquility",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["Nujabes"],
    album: "Modal Soul Classics II",
    duration: "3:55"
  },
  {
    id: 20,
    albumId: 2,
    title: "Nightfall Nostalgia",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c583608752c2c581e32df7c4",
    artists: ["J Dilla"],
    album: "Welcome 2 Detroit",
    duration: "4:25"
  },
  {
    id: 1,
    albumId: 3,
    title: "Such Great Heights",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "4:26"
  },
  {
    id: 2,
    albumId: 3,
    title: "I Will Follow You into the Dark",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Plans",
    duration: "3:09"
  },
  {
    id: 3,
    albumId: 3,
    title: "Soul Meets Body",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Plans",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 3,
    title: "The District Sleeps Alone Tonight",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "4:43"
  },
  {
    id: 5,
    albumId: 3,
    title: "Cath...",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Narrow Stairs",
    duration: "3:51"
  },
  {
    id: 6,
    albumId: 3,
    title: "We Looked Like Giants",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Transatlanticism",
    duration: "5:32"
  },
  {
    id: 7,
    albumId: 3,
    title: "The New Year",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Transatlanticism",
    duration: "4:06"
  },
  {
    id: 8,
    albumId: 3,
    title: "We Will Become Silhouettes",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "5:00"
  },
  {
    id: 9,
    albumId: 3,
    title: "Crooked Teeth",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Plans",
    duration: "3:23"
  },
  {
    id: 10,
    albumId: 3,
    title: "Sleeping In",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "4:20"
  },
  {
    id: 11,
    albumId: 3,
    title: "I Will Possess Your Heart",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Narrow Stairs",
    duration: "8:25"
  },
  {
    id: 12,
    albumId: 3,
    title: "This Place Is a Prison",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "3:54"
  },
  {
    id: 13,
    albumId: 3,
    title: "Title and Registration",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Transatlanticism",
    duration: "3:40"
  },
  {
    id: 14,
    albumId: 3,
    title: "Nothing Better",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "3:47"
  },
  {
    id: 15,
    albumId: 3,
    title: "Someday You Will Be Loved",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Plans",
    duration: "3:12"
  },
  {
    id: 16,
    albumId: 3,
    title: "Turn Around",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "3:42"
  },
  {
    id: 17,
    albumId: 3,
    title: "Transatlanticism",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Transatlanticism",
    duration: "7:55"
  },
  {
    id: 18,
    albumId: 3,
    title: "Brand New Colony",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "4:13"
  },
  {
    id: 19,
    albumId: 3,
    title: "Marching Bands of Manhattan",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["Death Cab for Cutie"],
    album: "Plans",
    duration: "4:10"
  },
  {
    id: 20,
    albumId: 3,
    title: "Sleep Spent",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84653a2affb482dc8028d818c7",
    artists: ["The Postal Service"],
    album: "Give Up",
    duration: "2:28"
  },
  {
    id: 1,
    albumId: 4,
    title: "Get Up (I Feel Like Being a) Sex Machine",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "Sex Machine",
    duration: "5:16"
  },
  {
    id: 2,
    albumId: 4,
    title: "Flash Light",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Funkentelechy vs. the Placebo Syndrome",
    duration: "5:46"
  },
  {
    id: 3,
    albumId: 4,
    title: "I Got You (I Feel Good)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "I Got You (I Feel Good)",
    duration: "2:47"
  },
  {
    id: 4,
    albumId: 4,
    title: "Give Up the Funk (Tear the Roof off the Sucker)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Mothership Connection",
    duration: "5:44"
  },
  {
    id: 5,
    albumId: 4,
    title: "Papa's Got a Brand New Bag, Pt. 1",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "Papa's Got a Brand New Bag",
    duration: "2:08"
  },
  {
    id: 6,
    albumId: 4,
    title: "Atomic Dog",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Computer Games",
    duration: "4:45"
  },
  {
    id: 7,
    albumId: 4,
    title: "Super Bad, Pt. 1 & 2",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "Super Bad",
    duration: "5:02"
  },
  {
    id: 8,
    albumId: 4,
    title: "One Nation Under a Groove",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "One Nation Under a Groove",
    duration: "7:27"
  },
  {
    id: 9,
    albumId: 4,
    title: "The Payback",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "The Payback",
    duration: "7:40"
  },
  {
    id: 10,
    albumId: 4,
    title: "Mothership Connection (Star Child)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Mothership Connection",
    duration: "6:13"
  },
  {
    id: 11,
    albumId: 4,
    title: "Funky Drummer",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "In the Jungle Groove",
    duration: "9:16"
  },
  {
    id: 12,
    albumId: 4,
    title: "Flashlight - Single Version",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Flash Light",
    duration: "4:28"
  },
  {
    id: 13,
    albumId: 4,
    title: "It's a Man's Man's Man's World - Single Version",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "It's a Man's Man's Man's World",
    duration: "2:46"
  },
  {
    id: 14,
    albumId: 4,
    title: "Funky Worm",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "The Best Of The Early Years",
    duration: "2:45"
  },
  {
    id: 15,
    albumId: 4,
    title: "Say It Loud - I'm Black and I'm Proud, Pt. 1 & 2",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "Say It Loud - I'm Black and I'm Proud",
    duration: "4:48"
  },
  {
    id: 16,
    albumId: 4,
    title: "Up for the Down Stroke",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Up for the Down Stroke",
    duration: "5:09"
  },
  {
    id: 17,
    albumId: 4,
    title: "Cold Sweat, Pt. 1 & 2",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "Cold Sweat",
    duration: "7:22"
  },
  {
    id: 18,
    albumId: 4,
    title: "Aqua Boogie (A Psychoalphadiscobetabioaquadoloop)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Motor Booty Affair",
    duration: "4:22"
  },
  {
    id: 19,
    albumId: 4,
    title: "I Got Ants In My Pants - Pts. 1 & 15 (45 Version)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["James Brown"],
    album: "I Got Ants In My Pants",
    duration: "4:10"
  },
  {
    id: 20,
    albumId: 4,
    title: "Do That Stuff - 45 Version",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8487f43c84308335fdb0254426",
    artists: ["Parliament-Funkadelic"],
    album: "Funkentelechy vs. the Placebo Syndrome",
    duration: "4:48"
  },
  {
    id: 1,
    albumId: 5,
    title: "Levels",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "Levels",
    duration: "3:22"
  },
  {
    id: 2,
    albumId: 5,
    title: "Animals",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "Gold Skies EP",
    duration: "5:03"
  },
  {
    id: 3,
    albumId: 5,
    title: "Wake Me Up",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "True",
    duration: "4:09"
  },
  {
    id: 4,
    albumId: 5,
    title: "Summer",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Calvin Harris"],
    album: "Motion",
    duration: "3:44"
  },
  {
    id: 5,
    albumId: 5,
    title: "Scared to Be Lonely",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "Scared to Be Lonely",
    duration: "3:41"
  },
  {
    id: 6,
    albumId: 5,
    title: "Waiting For Love",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "Stories",
    duration: "3:49"
  },
  {
    id: 7,
    albumId: 5,
    title: "In the Name of Love",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "In the Name of Love",
    duration: "3:16"
  },
  {
    id: 8,
    albumId: 5,
    title: "Hey Brother",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "True",
    duration: "4:15"
  },
  {
    id: 9,
    albumId: 5,
    title: "Don't Look Down",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "Break Through the Silence",
    duration: "3:43"
  },
  {
    id: 10,
    albumId: 5,
    title: "Lonely Together",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "AVĪCI (01)",
    duration: "3:02"
  },
  {
    id: 11,
    albumId: 5,
    title: "High on Life",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "High on Life",
    duration: "3:52"
  },
  {
    id: 12,
    albumId: 5,
    title: "Broken Arrows",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "Stories",
    duration: "3:52"
  },
  {
    id: 13,
    albumId: 5,
    title: "There for You",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "There for You",
    duration: "3:41"
  },
  {
    id: 14,
    albumId: 5,
    title: "The Nights",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:57"
  },
  {
    id: 15,
    albumId: 5,
    title: "Forever",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "Forever",
    duration: "3:41"
  },
  {
    id: 16,
    albumId: 5,
    title: "You Make Me",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "True",
    duration: "3:53"
  },
  {
    id: 17,
    albumId: 5,
    title: "Like I Do",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "Like I Do",
    duration: "3:22"
  },
  {
    id: 18,
    albumId: 5,
    title: "SOS",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "TIM",
    duration: "2:37"
  },
  {
    id: 19,
    albumId: 5,
    title: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Martin Garrix"],
    album: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
    duration: "2:44"
  },
  {
    id: 20,
    albumId: 5,
    title: "Heaven",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa365ba1611d63f6b98d18bc702",
    artists: ["Avicii"],
    album: "TIM",
    duration: "4:37"
  },
  {
    id: 1,
    albumId: 6,
    title: "Smells Like Teen Spirit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "Nevermind",
    duration: "5:01"
  },
  {
    id: 2,
    albumId: 6,
    title: "Creep",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "Pablo Honey",
    duration: "3:55"
  },
  {
    id: 3,
    albumId: 6,
    title: "Come as You Are",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "Nevermind",
    duration: "3:38"
  },
  {
    id: 4,
    albumId: 6,
    title: "Karma Police",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "OK Computer",
    duration: "4:21"
  },
  {
    id: 5,
    albumId: 6,
    title: "Lithium",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "Nevermind",
    duration: "4:17"
  },
  {
    id: 6,
    albumId: 6,
    title: "Paranoid Android",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "OK Computer",
    duration: "6:23"
  },
  {
    id: 7,
    albumId: 6,
    title: "Heart-Shaped Box",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "In Utero",
    duration: "4:39"
  },
  {
    id: 8,
    albumId: 6,
    title: "High and Dry",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "The Bends",
    duration: "4:17"
  },
  {
    id: 9,
    albumId: 6,
    title: "In Bloom",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "Nevermind",
    duration: "4:14"
  },
  {
    id: 10,
    albumId: 6,
    title: "Fake Plastic Trees",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "The Bends",
    duration: "4:50"
  },
  {
    id: 11,
    albumId: 6,
    title: "All Apologies",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "In Utero",
    duration: "3:51"
  },
  {
    id: 12,
    albumId: 6,
    title: "Street Spirit (Fade Out)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "The Bends",
    duration: "4:12"
  },
  {
    id: 13,
    albumId: 6,
    title: "Rape Me",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "In Utero",
    duration: "2:51"
  },
  {
    id: 14,
    albumId: 6,
    title: "No Surprises",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "OK Computer",
    duration: "3:48"
  },
  {
    id: 15,
    albumId: 6,
    title: "About a Girl",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "Bleach",
    duration: "2:48"
  },
  {
    id: 16,
    albumId: 6,
    title: "The Bends",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "The Bends",
    duration: "4:06"
  },
  {
    id: 17,
    albumId: 6,
    title: "Dumb",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "In Utero",
    duration: "2:32"
  },
  {
    id: 18,
    albumId: 6,
    title: "Just",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "The Bends",
    duration: "3:54"
  },
  {
    id: 19,
    albumId: 6,
    title: "Breed",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Nirvana"],
    album: "Nevermind",
    duration: "3:03"
  },
  {
    id: 20,
    albumId: 6,
    title: "Pyramid Song",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84420ac78993c4f6fdb27da37f",
    artists: ["Radiohead"],
    album: "Amnesiac",
    duration: "4:49"
  },
  {
    id: 1,
    albumId: 7,
    title: "Do I Wanna Know?",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "4:32"
  },
  {
    id: 2,
    albumId: 7,
    title: "Last Nite",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Is This It",
    duration: "3:13"
  },
  {
    id: 3,
    albumId: 7,
    title: "R U Mine?",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "3:20"
  },
  {
    id: 4,
    albumId: 7,
    title: "Someday",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Is This It",
    duration: "3:07"
  },
  {
    id: 5,
    albumId: 7,
    title: "Fluorescent Adolescent",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "Favourite Worst Nightmare",
    duration: "3:03"
  },
  {
    id: 6,
    albumId: 7,
    title: "Reptilia",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Room on Fire",
    duration: "3:42"
  },
  {
    id: 7,
    albumId: 7,
    title: "505",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "Favourite Worst Nightmare",
    duration: "4:13"
  },
  {
    id: 8,
    albumId: 7,
    title: "Hard to Explain",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Is This It",
    duration: "3:47"
  },
  {
    id: 9,
    albumId: 7,
    title: "I Bet You Look Good on the Dancefloor",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "Whatever People Say I Am, That's What I'm Not",
    duration: "2:53"
  },
  {
    id: 10,
    albumId: 7,
    title: "Under Cover of Darkness",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Angles",
    duration: "3:57"
  },
  {
    id: 11,
    albumId: 7,
    title: "Why'd You Only Call Me When You're High?",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "2:41"
  },
  {
    id: 12,
    albumId: 7,
    title: "Juicebox",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "First Impressions of Earth",
    duration: "3:16"
  },
  {
    id: 13,
    albumId: 7,
    title: "Teddy Picker",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "Favourite Worst Nightmare",
    duration: "2:43"
  },
  {
    id: 14,
    albumId: 7,
    title: "You Only Live Once",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "First Impressions of Earth",
    duration: "3:09"
  },
  {
    id: 15,
    albumId: 7,
    title: "When the Sun Goes Down",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "Whatever People Say I Am, That's What I'm Not",
    duration: "3:20"
  },
  {
    id: 16,
    albumId: 7,
    title: "The End Has No End",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Room on Fire",
    duration: "3:00"
  },
  {
    id: 17,
    albumId: 7,
    title: "Four Out of Five",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "Tranquility Base Hotel & Casino",
    duration: "4:33"
  },
  {
    id: 18,
    albumId: 7,
    title: "12:51",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Room on Fire",
    duration: "2:33"
  },
  {
    id: 19,
    albumId: 7,
    title: "Arabella",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "3:27"
  },
  {
    id: 20,
    albumId: 7,
    title: "Taken for a Fool",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846472fa39ed33ff96488be411",
    artists: ["The Strokes"],
    album: "Angles",
    duration: "3:25"
  },
  {
    id: 1,
    albumId: 8,
    title: "One Kiss (with Dua Lipa)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "Funk Wav Bounces Vol.1",
    duration: "3:35"
  },
  {
    id: 2,
    albumId: 8,
    title: "Titanium (feat. Sia)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Nothing but the Beat",
    duration: "4:05"
  },
  {
    id: 3,
    albumId: 8,
    title: "Summer",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "Motion",
    duration: "3:44"
  },
  {
    id: 4,
    albumId: 8,
    title: "Without You (feat. Usher)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Nothing but the Beat",
    duration: "3:28"
  },
  {
    id: 5,
    albumId: 8,
    title: "Feel So Close - Radio Edit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "18 Months",
    duration: "3:26"
  },
  {
    id: 6,
    albumId: 8,
    title: "Memories (feat. Kid Cudi)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "One Love",
    duration: "3:29"
  },
  {
    id: 7,
    albumId: 8,
    title: "Blame (feat. John Newman)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "Motion",
    duration: "3:32"
  },
  {
    id: 8,
    albumId: 8,
    title: "When Love Takes Over (feat. Kelly Rowland)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "One Love",
    duration: "3:11"
  },
  {
    id: 9,
    albumId: 8,
    title: "This Is What You Came For",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "This Is What You Came For",
    duration: "3:41"
  },
  {
    id: 10,
    albumId: 8,
    title: "Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Listen",
    duration: "3:12"
  },
  {
    id: 11,
    albumId: 8,
    title: "I Need Your Love (feat. Ellie Goulding)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "18 Months",
    duration: "3:54"
  },
  {
    id: 12,
    albumId: 8,
    title: "Shot Me Down (feat. Skylar Grey) - Radio Edit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Listen",
    duration: "3:11"
  },
  {
    id: 13,
    albumId: 8,
    title: "Outside (feat. Ellie Goulding)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "Motion",
    duration: "3:47"
  },
  {
    id: 14,
    albumId: 8,
    title: "Lovers on the Sun (feat. Sam Martin)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Listen",
    duration: "3:23"
  },
  {
    id: 15,
    albumId: 8,
    title: "Sweet Nothing (feat. Florence Welch)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "18 Months",
    duration: "3:33"
  },
  {
    id: 16,
    albumId: 8,
    title: "Play Hard (feat. Ne-Yo & Akon)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Nothing but the Beat",
    duration: "3:21"
  },
  {
    id: 17,
    albumId: 8,
    title: "Slide (feat. Frank Ocean & Migos)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "Funk Wav Bounces Vol.1",
    duration: "3:50"
  },
  {
    id: 18,
    albumId: 8,
    title: "Who's That Chick? (feat. Rihanna)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "One More Love",
    duration: "3:20"
  },
  {
    id: 19,
    albumId: 8,
    title: "We Found Love (feat. Calvin Harris)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["Calvin Harris"],
    album: "Talk That Talk",
    duration: "3:36"
  },
  {
    id: 20,
    albumId: 8,
    title: "Bad (feat. Vassy) - Radio Edit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84289c70c21adbdf4f20f5131d",
    artists: ["David Guetta"],
    album: "Listen",
    duration: "2:50"
  },
  {
    id: 1,
    albumId: 9,
    title: "Could You Be Loved",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Uprising",
    duration: "3:56"
  },
  {
    id: 2,
    albumId: 9,
    title: "Pressure Drop",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Monkey Man",
    duration: "2:59"
  },
  {
    id: 3,
    albumId: 9,
    title: "One Love / People Get Ready",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Exodus",
    duration: "2:52"
  },
  {
    id: 4,
    albumId: 9,
    title: "54-46 Was My Number",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Monkey Man",
    duration: "3:10"
  },
  {
    id: 5,
    albumId: 9,
    title: "Redemption Song",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Uprising",
    duration: "3:47"
  },
  {
    id: 6,
    albumId: 9,
    title: "Funky Kingston",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Funky Kingston",
    duration: "4:55"
  },
  {
    id: 7,
    albumId: 9,
    title: "Three Little Birds",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Exodus",
    duration: "3:01"
  },
  {
    id: 8,
    albumId: 9,
    title: "Pressure Drop - Single Version",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Monkey Man",
    duration: "2:55"
  },
  {
    id: 9,
    albumId: 9,
    title: "No Woman, No Cry - Live at the Lyceum, London, 1975",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Live!",
    duration: "7:07"
  },
  {
    id: 10,
    albumId: 9,
    title: "Monkey Man",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Monkey Man",
    duration: "3:31"
  },
  {
    id: 11,
    albumId: 9,
    title: "Buffalo Soldier",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Confrontation",
    duration: "4:16"
  },
  {
    id: 12,
    albumId: 9,
    title: "Reggae Got Soul",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Reggae Got Soul",
    duration: "3:08"
  },
  {
    id: 13,
    albumId: 9,
    title: "Get Up, Stand Up",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Burnin'",
    duration: "3:18"
  },
  {
    id: 14,
    albumId: 9,
    title: "54-46 Was My Number - 2002 Remaster",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Monkey Man",
    duration: "3:12"
  },
  {
    id: 15,
    albumId: 9,
    title: "Jamming",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Exodus",
    duration: "3:31"
  },
  {
    id: 16,
    albumId: 9,
    title: "Pomps and Pride - 2002 Remaster",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Monkey Man",
    duration: "4:27"
  },
  {
    id: 17,
    albumId: 9,
    title: "Stir It Up",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Catch a Fire",
    duration: "5:32"
  },
  {
    id: 18,
    albumId: 9,
    title: "Reggae Got Soul - 2002 Remaster",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Reggae Got Soul",
    duration: "3:07"
  },
  {
    id: 19,
    albumId: 9,
    title: "Natural Mystic",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Bob Marley"],
    album: "Exodus",
    duration: "3:27"
  },
  {
    id: 20,
    albumId: 9,
    title: "Bam Bam - Original Mix",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3f91422b7d1eb1d0b188842d4",
    artists: ["Toots and the Maytals"],
    album: "Funky Kingston",
    duration: "3:09"
  },
  {
    id: 1,
    albumId: 10,
    title: "Baby One More Time",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "Baby One More Time",
    duration: "3:31"
  },
  {
    id: 2,
    albumId: 10,
    title: "Everybody (Backstreet's Back) - Radio Edit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Backstreet's Back",
    duration: "3:44"
  },
  {
    id: 3,
    albumId: 10,
    title: "Oops!...I Did It Again",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "Oops!... I Did It Again",
    duration: "3:30"
  },
  {
    id: 4,
    albumId: 10,
    title: "I Want It That Way",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Millennium",
    duration: "3:33"
  },
  {
    id: 5,
    albumId: 10,
    title: "Sometimes",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "...Baby One More Time",
    duration: "4:05"
  },
  {
    id: 6,
    albumId: 10,
    title: "As Long as You Love Me",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Backstreet's Back",
    duration: "3:32"
  },
  {
    id: 7,
    albumId: 10,
    title: "Crazy",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: " ...Baby One More Time",
    duration: "3:18"
  },
  {
    id: 8,
    albumId: 10,
    title: "Quit Playing Games (With My Heart)",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Backstreet Boys",
    duration: "3:53"
  },
  {
    id: 9,
    albumId: 10,
    title: "Stronger",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "Oops!... I Did It Again",
    duration: "3:23"
  },
  {
    id: 10,
    albumId: 10,
    title: "I'll Never Break Your Heart",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Backstreet Boys",
    duration: "4:48"
  },
  {
    id: 11,
    albumId: 10,
    title: "Lucky",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "Oops!... I Did It Again",
    duration: "3:25"
  },
  {
    id: 12,
    albumId: 10,
    title: "Show Me the Meaning of Being Lonely",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Millennium",
    duration: "3:54"
  },
  {
    id: 13,
    albumId: 10,
    title: "(You Drive Me) Crazy - The Stop Remix!",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "...Baby One More Time",
    duration: "3:18"
  },
  {
    id: 14,
    albumId: 10,
    title: "We've Got It Goin' On - Radio Edit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Backstreet Boys",
    duration: "3:41"
  },
  {
    id: 15,
    albumId: 10,
    title: "From the Bottom of My Broken Heart",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "...Baby One More Time",
    duration: "5:10"
  },
  {
    id: 16,
    albumId: 10,
    title: "All I Have to Give",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Backstreet's Back",
    duration: "4:37"
  },
  {
    id: 17,
    albumId: 10,
    title: "Sometimes - Radio Edit",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "...Baby One More Time",
    duration: "3:55"
  },
  {
    id: 18,
    albumId: 10,
    title: "The Call",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "Black & Blue",
    duration: "3:24"
  },
  {
    id: 19,
    albumId: 10,
    title: "Stronger - Miguel 'Migs' Vocal Mix",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Britney Spears"],
    album: "Oops!... I Did It Again",
    duration: "6:57"
  },
  {
    id: 20,
    albumId: 10,
    title: "I Want It That Way - The Jack D. Elliot Radio Mix",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d297aa3a17182149122ed2df",
    artists: ["Backstreet Boys"],
    album: "For the Fans",
    duration: "3:42"
  },
  {
    id: 1,
    albumId: 11,
    title: "Blowin' in the Wind",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "The Freewheelin' Bob Dylan",
    duration: "2:48"
  },
  {
    id: 2,
    albumId: 11,
    title: "The Sound of Silence",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Wednesday Morning, 3 A.M.",
    duration: "3:05"
  },
  {
    id: 3,
    albumId: 11,
    title: "Don't Think Twice, It's All Right",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "The Freewheelin' Bob Dylan",
    duration: "3:40"
  },
  {
    id: 4,
    albumId: 11,
    title: "Mrs. Robinson",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Bookends",
    duration: "4:02"
  },
  {
    id: 5,
    albumId: 11,
    title: "Knockin' on Heaven's Door",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Pat Garrett & Billy the Kid",
    duration: "2:30"
  },
  {
    id: 6,
    albumId: 11,
    title: "Bridge over Troubled Water",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Bridge over Troubled Water",
    duration: "4:52"
  },
  {
    id: 7,
    albumId: 11,
    title: "Like a Rolling Stone",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Highway 61 Revisited",
    duration: "6:13"
  },
  {
    id: 8,
    albumId: 11,
    title: "Scarborough Fair/Canticle",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Parsley, Sage, Rosemary and Thyme",
    duration: "3:08"
  },
  {
    id: 9,
    albumId: 11,
    title: "Lay Lady Lay",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Nashville Skyline",
    duration: "3:18"
  },
  {
    id: 10,
    albumId: 11,
    title: "Homeward Bound",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Parsley, Sage, Rosemary and Thyme",
    duration: "2:30"
  },
  {
    id: 11,
    albumId: 11,
    title: "Mr. Tambourine Man",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Bringing It All Back Home",
    duration: "5:27"
  },
  {
    id: 12,
    albumId: 11,
    title: "America",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Bookends",
    duration: "3:34"
  },
  {
    id: 13,
    albumId: 11,
    title: "Tangled Up in Blue",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Blood on the Tracks",
    duration: "5:42"
  },
  {
    id: 14,
    albumId: 11,
    title: "The Boxer",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Bridge over Troubled Water",
    duration: "5:08"
  },
  {
    id: 15,
    albumId: 11,
    title: "Just Like a Woman",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Blonde on Blonde",
    duration: "4:52"
  },
  {
    id: 16,
    albumId: 11,
    title: "El Condor Pasa (If I Could)",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Bridge over Troubled Water",
    duration: "3:07"
  },
  {
    id: 17,
    albumId: 11,
    title: "Don't Think Twice, It's All Right - Live at The Gaslight Cafe, NYC, 1962",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Bob Dylan In Concert: Brandeis University, 1963",
    duration: "3:32"
  },
  {
    id: 18,
    albumId: 11,
    title: "April Come She Will",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Sounds of Silence",
    duration: "1:50"
  },
  {
    id: 19,
    albumId: 11,
    title: "Forever Young - Slow Version",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Bob Dylan"],
    album: "Planet Waves",
    duration: "4:57"
  },
  {
    id: 20,
    albumId: 11,
    title: "America - Demo Version",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Soft%20Acoustic%20Folk/en/default",
    artists: ["Simon & Garfunkel"],
    album: "Old Friends",
    duration: "3:30"
  },
  {
    id: 1,
    albumId: 12,
    title: "River Flows in You",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "First Love",
    duration: "3:05"
  },
  {
    id: 2,
    albumId: 12,
    title: "Nuvole Bianche",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Una Mattina",
    duration: "5:06"
  },
  {
    id: 3,
    albumId: 12,
    title: "Kiss the Rain",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "First Love",
    duration: "4:19"
  },
  {
    id: 4,
    albumId: 12,
    title: "Una Mattina",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Una Mattina",
    duration: "6:42"
  },
  {
    id: 5,
    albumId: 12,
    title: "May Be",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "First Love",
    duration: "3:55"
  },
  {
    id: 6,
    albumId: 12,
    title: "Divenire",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Divenire",
    duration: "6:42"
  },
  {
    id: 7,
    albumId: 12,
    title: "Spring Waltz",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "Spring Waltz",
    duration: "3:32"
  },
  {
    id: 8,
    albumId: 12,
    title: "Experience",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Nightbook",
    duration: "5:39"
  },
  {
    id: 9,
    albumId: 12,
    title: "Fotografia",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "First Love",
    duration: "4:22"
  },
  {
    id: 10,
    albumId: 12,
    title: "Fly",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Divenire",
    duration: "4:22"
  },
  {
    id: 11,
    albumId: 12,
    title: "Love Me",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "First Love",
    duration: "3:24"
  },
  {
    id: 12,
    albumId: 12,
    title: "Berlin Song",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "In a Time Lapse",
    duration: "3:41"
  },
  {
    id: 13,
    albumId: 12,
    title: "River Flows in You - Vocal. Ruvin",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "River Flows in You",
    duration: "3:03"
  },
  {
    id: 14,
    albumId: 12,
    title: "Primavera",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Divenire",
    duration: "7:22"
  },
  {
    id: 15,
    albumId: 12,
    title: "It's Your Day",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "It's Your Day",
    duration: "3:36"
  },
  {
    id: 16,
    albumId: 12,
    title: "Nuvole Bianche - Island",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "In a Time Lapse",
    duration: "6:41"
  },
  {
    id: 17,
    albumId: 12,
    title: "Spring Time",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "Spring Waltz",
    duration: "3:11"
  },
  {
    id: 18,
    albumId: 12,
    title: "Night",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "Nightbook",
    duration: "4:05"
  },
  {
    id: 19,
    albumId: 12,
    title: "Wait There",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Yiruma"],
    album: "First Love",
    duration: "4:56"
  },
  {
    id: 20,
    albumId: 12,
    title: "I Giorni",
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    artists: ["Ludovico Einaudi"],
    album: "I Giorni",
    duration: "6:39"
  },
  {
    id: 1,
    albumId: 13,
    title: "Lose Yourself",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "8 Mile: Music from and Inspired by the Motion Picture",
    duration: "5:20"
  },
  {
    id: 2,
    albumId: 13,
    title: "Radioactive",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:08"
  },
  {
    id: 3,
    albumId: 13,
    title: "Till I Collapse",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "The Eminem Show",
    duration: "4:58"
  },
  {
    id: 4,
    albumId: 13,
    title: "Believer",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Evolve",
    duration: "3:24"
  },
  {
    id: 5,
    albumId: 13,
    title: "Not Afraid",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "Recovery",
    duration: "4:08"
  },
  {
    id: 6,
    albumId: 13,
    title: "Whatever It Takes",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Evolve",
    duration: "3:21"
  },
  {
    id: 7,
    albumId: 13,
    title: "'Till I Collapse - Remix",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "'Till I Collapse (Remix)",
    duration: "4:58"
  },
  {
    id: 8,
    albumId: 13,
    title: "Warriors",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Smoke + Mirrors",
    duration: "2:51"
  },
  {
    id: 9,
    albumId: 13,
    title: "Survival",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "The Marshall Mathers LP2",
    duration: "4:32"
  },
  {
    id: 10,
    albumId: 13,
    title: "On Top of the World",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:12"
  },
  {
    id: 11,
    albumId: 13,
    title: "Gonna Make You Sweat (Everybody Dance Now)",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["C+C Music Factory"],
    album: "Gonna Make You Sweat",
    duration: "4:05"
  },
  {
    id: 12,
    albumId: 13,
    title: "Demons",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "2:57"
  },
  {
    id: 13,
    albumId: 13,
    title: "Lose Yourself - Soundtrack Version (Explicit)",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "8 Mile: Music from and Inspired by the Motion Picture",
    duration: "5:26"
  },
  {
    id: 14,
    albumId: 13,
    title: "Natural",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Origins",
    duration: "3:09"
  },
  {
    id: 15,
    albumId: 13,
    title: "Sing for the Moment",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "The Eminem Show",
    duration: "5:39"
  },
  {
    id: 16,
    albumId: 13,
    title: "Whatever It Takes - Jorgen Odegard Remix",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Whatever It Takes (Jorgen Odegard Remix)",
    duration: "3:15"
  },
  {
    id: 17,
    albumId: 13,
    title: "Venom - Music from the Motion Picture",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "Kamikaze",
    duration: "4:29"
  },
  {
    id: 18,
    albumId: 13,
    title: "Birds",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Smoke + Mirrors",
    duration: "3:39"
  },
  {
    id: 19,
    albumId: 13,
    title: "Guts Over Fear",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Eminem"],
    album: "Shady XV",
    duration: "5:01"
  },
  {
    id: 20,
    albumId: 13,
    title: "Bad Liar",
    image: "https://seed-mix-image.spotifycdn.com/v6/img/desc/Motivation%20Workout/en/default",
    artists: ["Imagine Dragons"],
    album: "Origins",
    duration: "4:20"
  },
  {
    id: 1,
    albumId: 14,
    title: "Forest Rain",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Nature's Symphony",
    duration: "30:00"
  },
  {
    id: 2,
    albumId: 14,
    title: "Ocean Waves",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Ocean Serenity",
    duration: "45:00"
  },
  {
    id: 3,
    albumId: 14,
    title: "Babbling Brook",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Tranquil Streams",
    duration: "25:00"
  },
  {
    id: 4,
    albumId: 14,
    title: "Mountain Wind",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Mountain Retreat",
    duration: "40:00"
  },
  {
    id: 5,
    albumId: 14,
    title: "Underwater Symphony",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Aquatic Harmony",
    duration: "35:00"
  },
  {
    id: 6,
    albumId: 14,
    title: "Meditation Music",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Zen Vibes",
    duration: "1:00:00"
  },
  {
    id: 7,
    albumId: 14,
    title: "Heavenly Chimes",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Celestial Harmony",
    duration: "50:00"
  },
  {
    id: 8,
    albumId: 14,
    title: "Deep Sleep Ambient",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Dreamscape",
    duration: "1:30:00"
  },
  {
    id: 9,
    albumId: 14,
    title: "Zen Garden Serenity",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Tranquility Haven",
    duration: "45:00"
  },
  {
    id: 10,
    albumId: 14,
    title: "Calming Flute Melodies",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Flute Enchantment",
    duration: "55:00"
  },
  {
    id: 11,
    albumId: 14,
    title: "Gentle Rainfall",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Rainy Day Reverie",
    duration: "40:00"
  },
  {
    id: 12,
    albumId: 14,
    title: "Tranquil Forest Ambience",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Enchanted Forest",
    duration: "55:00"
  },
  {
    id: 13,
    albumId: 14,
    title: "Soothing Spa Music",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Spa Serenade",
    duration: "1:15:00"
  },
  {
    id: 14,
    albumId: 14,
    title: "Whispers of the Wind",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Wind's Embrace",
    duration: "50:00"
  },
  {
    id: 15,
    albumId: 14,
    title: "Piano Reflections",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Piano Oasis",
    duration: "1:10:00"
  },
  {
    id: 16,
    albumId: 14,
    title: "Morning Sunlight Medley",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Sunrise Serenade",
    duration: "1:20:00"
  },
  {
    id: 17,
    albumId: 14,
    title: "Whale Song Symphony",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Oceanic Echoes",
    duration: "1:05:00"
  },
  {
    id: 18,
    albumId: 14,
    title: "Floating Clouds Melody",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Relaxing Music"],
    album: "Cloud Nine",
    duration: "55:00"
  },
  {
    id: 19,
    albumId: 14,
    title: "Gentle Breeze Harmony",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Breezy Retreat",
    duration: "45:00"
  },
  {
    id: 20,
    albumId: 14,
    title: "Deep Sea Lullaby",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa30f80fd49506a3bca6c0dac18",
    artists: ["Nature Sounds"],
    album: "Aqua Dreams",
    duration: "1:30:00"
  },
  {
    id: 1,
    albumId: 15,
    title: "Ring of Fire",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "Ring of Fire: The Best of Johnny Cash",
    duration: "2:37"
  },
  {
    id: 2,
    albumId: 15,
    title: "Jolene",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "Jolene",
    duration: "2:41"
  },
  {
    id: 3,
    albumId: 15,
    title: "I Walk the Line",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "I Walk the Line",
    duration: "2:44"
  },
  {
    id: 4,
    albumId: 15,
    title: "9 to 5",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "9 to 5 and Odd Jobs",
    duration: "2:45"
  },
  {
    id: 5,
    albumId: 15,
    title: "Folsom Prison Blues",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "With His Hot and Blue Guitar!",
    duration: "2:44"
  },
  {
    id: 6,
    albumId: 15,
    title: "Coat of Many Colors",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "Coat of Many Colors",
    duration: "3:04"
  },
  {
    id: 7,
    albumId: 15,
    title: "A Boy Named Sue",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "Johnny Cash At San Quentin",
    duration: "3:48"
  },
  {
    id: 8,
    albumId: 15,
    title: "Here You Come Again",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "Here You Come Again",
    duration: "2:56"
  },
  {
    id: 9,
    albumId: 15,
    title: "Ghost Riders in the Sky",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "Silver",
    duration: "3:46"
  },
  {
    id: 10,
    albumId: 15,
    title: "Why'd You Come in Here Lookin' Like That",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "White Limozeen",
    duration: "2:32"
  },
  {
    id: 11,
    albumId: 15,
    title: "Jackson",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash", "June Carter Cash"],
    album: "Carrying On with",
    duration: "2:45"
  },
  {
    id: 12,
    albumId: 15,
    title: "Islands in the Stream",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton", "Kenny Rogers"],
    album: "Eyes That See in the Dark",
    duration: "4:10"
  },
  {
    id: 13,
    albumId: 15,
    title: "The Man Comes Around",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "American IV: The Man Comes Around",
    duration: "4:27"
  },
  {
    id: 14,
    albumId: 15,
    title: '9 to 5 - From "9 to 5" Original Motion Picture Soundtrack',
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "9 to 5",
    duration: "2:43"
  },
  {
    id: 15,
    albumId: 15,
    title: "I Walk the Line - Single Version",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "I Walk the Line",
    duration: "2:46"
  },
  {
    id: 16,
    albumId: 15,
    title: '9 to 5 - from "9 to 5" Original Motion Picture Soundtrack',
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "9 to 5",
    duration: "2:45"
  },
  {
    id: 17,
    albumId: 15,
    title: "A Boy Named Sue - Live at San Quentin State Prison, San Quentin, CA - February 1969",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "At San Quentin",
    duration: "3:50"
  },
  {
    id: 18,
    albumId: 15,
    title: "Jolene - Single Version",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "Jolene",
    duration: "2:41"
  },
  {
    id: 19,
    albumId: 15,
    title: "I Got Stripes - Single Version",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Johnny Cash"],
    album: "I Got Stripes",
    duration: "1:52"
  },
  {
    id: 20,
    albumId: 15,
    title: '9 to 5 - From "9 to 5" Original Motion Picture Soundtrack',
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848e0c8a2e2848ba1ea03949d9",
    artists: ["Dolly Parton"],
    album: "9 to 5",
    duration: "2:42"
  },
  {
    id: 1,
    albumId: 16,
    title: "Hips Don't Lie",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira", "Wyclef Jean"],
    album: "Oral Fixation, Vol. 2",
    duration: "3:38"
  },
  {
    id: 2,
    albumId: 16,
    title: "Vivir Mi Vida",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "3.0",
    duration: "4:12"
  },
  {
    id: 3,
    albumId: 16,
    title: "La Tortura",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira", "Alejandro Sanz"],
    album: "Fijación Oral Vol. 1",
    duration: "3:33"
  },
  {
    id: 4,
    albumId: 16,
    title: "Valió la Pena",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Valió la Pena",
    duration: "4:51"
  },
  {
    id: 5,
    albumId: 16,
    title: "Whenever, Wherever",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira"],
    album: "Laundry Service",
    duration: "3:17"
  },
  {
    id: 6,
    albumId: 16,
    title: "Dímelo",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "El Cantante",
    duration: "4:42"
  },
  {
    id: 7,
    albumId: 16,
    title: "Waka Waka (This Time for Africa) [The Official 2010 FIFA World Cup (TM) Song]",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira"],
    album: "Sale el Sol",
    duration: "3:22"
  },
  {
    id: 8,
    albumId: 16,
    title: "You Sang to Me",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Marc Anthony",
    duration: "5:49"
  },
  {
    id: 9,
    albumId: 16,
    title: "La La La (Brazil 2014)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira"],
    album: "La La La (Brazil 2014)",
    duration: "3:17"
  },
  {
    id: 10,
    albumId: 16,
    title: "I Need to Know",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Marc Anthony",
    duration: "3:48"
  },
  {
    id: 11,
    albumId: 16,
    title: "Loca (feat. El Cata)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira", "El Cata"],
    album: "Sale el Sol",
    duration: "3:05"
  },
  {
    id: 12,
    albumId: 16,
    title: "Ahora Quien",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Amar Sin Mentiras",
    duration: "5:07"
  },
  {
    id: 13,
    albumId: 16,
    title: "Me Enamoré",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira"],
    album: "El Dorado",
    duration: "3:45"
  },
  {
    id: 14,
    albumId: 16,
    title: "A Quién Quiero Mentirle",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Iconos",
    duration: "4:31"
  },
  {
    id: 15,
    albumId: 16,
    title: "Chantaje (feat. Maluma)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira", "Maluma"],
    album: "El Dorado",
    duration: "3:15"
  },
  {
    id: 16,
    albumId: 16,
    title: "I Want to Spend My Lifetime Loving You",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony", "Tina Arena"],
    album: "Marc Anthony",
    duration: "4:42"
  },
  {
    id: 17,
    albumId: 16,
    title: "La Bicicleta",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira", "Carlos Vives"],
    album: "El Dorado",
    duration: "3:49"
  },
  {
    id: 18,
    albumId: 16,
    title: "Tu Amor Me Hace Bien",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Amar Sin Mentiras",
    duration: "5:06"
  },
  {
    id: 19,
    albumId: 16,
    title: "La La La (Brazil 2014) - Spanish Version",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Shakira"],
    album: "La La La (Brazil 2014)",
    duration: "3:06"
  },
  {
    id: 20,
    albumId: 16,
    title: "I Need You",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa388ddde2fd8658626c40edc2d",
    artists: ["Marc Anthony"],
    album: "Mended",
    duration: "4:11"
  },
  {
    id: 1,
    albumId: 17,
    title: "Let's Get It On",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "Let's Get It On",
    duration: "4:44"
  },
  {
    id: 2,
    albumId: 17,
    title: "Respect",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "I Never Loved a Man the Way I Love You",
    duration: "2:28"
  },
  {
    id: 3,
    albumId: 17,
    title: "Sexual Healing",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "Midnight Love",
    duration: "3:59"
  },
  {
    id: 4,
    albumId: 17,
    title: "I Say a Little Prayer",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Aretha Now",
    duration: "3:33"
  },
  {
    id: 5,
    albumId: 17,
    title: "What's Going On",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "What's Going On",
    duration: "3:53"
  },
  {
    id: 6,
    albumId: 17,
    title: "Chain of Fools",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Lady Soul",
    duration: "2:46"
  },
  {
    id: 7,
    albumId: 17,
    title: "Ain't No Mountain High Enough",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye", "Tammi Terrell"],
    album: "United",
    duration: "2:29"
  },
  {
    id: 8,
    albumId: 17,
    title: "I Never Loved a Man (The Way I Love You)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "I Never Loved a Man the Way I Love You",
    duration: "2:51"
  },
  {
    id: 9,
    albumId: 17,
    title: "Mercy Mercy Me (The Ecology)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "What's Going On",
    duration: "3:15"
  },
  {
    id: 10,
    albumId: 17,
    title: "Think",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Aretha Now",
    duration: "2:18"
  },
  {
    id: 11,
    albumId: 17,
    title: "Got to Give It Up",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "Live at the London Palladium",
    duration: "4:12"
  },
  {
    id: 12,
    albumId: 17,
    title: "(You Make Me Feel Like) A Natural Woman",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Lady Soul",
    duration: "2:46"
  },
  {
    id: 13,
    albumId: 17,
    title: "Inner City Blues (Make Me Wanna Holler)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "What's Going On",
    duration: "5:26"
  },
  {
    id: 14,
    albumId: 17,
    title: "Rock Steady",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Young, Gifted and Black",
    duration: "3:14"
  },
  {
    id: 15,
    albumId: 17,
    title: "What's Happening Brother - Album Version (Stereo)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye"],
    album: "What's Going On",
    duration: "2:44"
  },
  {
    id: 16,
    albumId: 17,
    title: "Spanish Harlem",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Aretha's Greatest Hits",
    duration: "3:30"
  },
  {
    id: 17,
    albumId: 17,
    title: "Sexual Healing - Marvin's Room Remix",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye", "Shlohmo"],
    album: "Sexual Healing (Marvin's Room Remix)",
    duration: "4:26"
  },
  {
    id: 18,
    albumId: 17,
    title: "Think - Alternate Version",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Aretha Now",
    duration: "3:10"
  },
  {
    id: 19,
    albumId: 17,
    title: "Dancing in the Street - Stereo Version / Single Version",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Marvin Gaye", "Martha Reeves & The Vandellas"],
    album: "Dancing in the Street",
    duration: "2:39"
  },
  {
    id: 20,
    albumId: 17,
    title: "Chain of Fools - Unedited Version",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa352f18fd2852abaefd9198032",
    artists: ["Aretha Franklin"],
    album: "Lady Soul",
    duration: "4:21"
  },
  {
    id: 1,
    albumId: 18,
    title: "Empire State of Mind",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z", "Alicia Keys"],
    album: "The Blueprint 3",
    duration: "4:36"
  },
  {
    id: 2,
    albumId: 18,
    title: "Alright",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "To Pimp A Butterfly",
    duration: "3:39"
  },
  {
    id: 3,
    albumId: 18,
    title: "99 Problems",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z"],
    album: "The Black Album",
    duration: "3:54"
  },
  {
    id: 4,
    albumId: 18,
    title: "HUMBLE.",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "DAMN.",
    duration: "2:57"
  },
  {
    id: 5,
    albumId: 18,
    title: "Empire State of Mind, Pt. II (Broken Down)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Alicia Keys"],
    album: "The Element of Freedom",
    duration: "3:36"
  },
  {
    id: 6,
    albumId: 18,
    title: "DNA.",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "DAMN.",
    duration: "3:05"
  },
  {
    id: 7,
    albumId: 18,
    title: "N****s in Paris",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z", "Kanye West"],
    album: "Watch The Throne",
    duration: "3:39"
  },
  {
    id: 8,
    albumId: 18,
    title: "Swimming Pools (Drank)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "good kid, m.A.A.d city",
    duration: "3:40"
  },
  {
    id: 9,
    albumId: 18,
    title: "Hard Knock Life (Ghetto Anthem)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z"],
    album: "Vol. 2... Hard Knock Life",
    duration: "3:59"
  },
  {
    id: 10,
    albumId: 18,
    title: "LOVE. FEAT. ZACARI.",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "DAMN.",
    duration: "3:33"
  },
  {
    id: 11,
    albumId: 18,
    title: "Numb / Encore",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z", "Linkin Park"],
    album: "Collision Course",
    duration: "3:25"
  },
  {
    id: 12,
    albumId: 18,
    title: "Money Trees",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "good kid, m.A.A.d city",
    duration: "6:26"
  },
  {
    id: 13,
    albumId: 18,
    title: "Big Pimpin'",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z"],
    album: "Vol. 3... Life and Times of S. Carter",
    duration: "4:44"
  },
  {
    id: 14,
    albumId: 18,
    title: "Bitch, Don’t Kill My Vibe",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "good kid, m.A.A.d city",
    duration: "5:10"
  },
  {
    id: 15,
    albumId: 18,
    title: "99 Problems / Points Of Authority - Live / MTV Ultimate Mash-Ups Presents Jay-Z / Linkin Park",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z", "Linkin Park"],
    album: "Collision Course",
    duration: "4:06"
  },
  {
    id: 16,
    albumId: 18,
    title: "ELEMENT.",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "DAMN.",
    duration: "3:29"
  },
  {
    id: 17,
    albumId: 18,
    title: "PSA (Interlude)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z"],
    album: "The Blueprint",
    duration: "2:58"
  },
  {
    id: 18,
    albumId: 18,
    title: "Money Trees",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "good kid, m.A.A.d city",
    duration: "6:26"
  },
  {
    id: 19,
    albumId: 18,
    title: "Young Forever",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Jay-Z", "Mr Hudson"],
    album: "The Blueprint 3",
    duration: "4:13"
  },
  {
    id: 20,
    albumId: 18,
    title: "LOYALTY. FEAT. RIHANNA.",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa3a7a3d55cb4f7a88b81a0db75",
    artists: ["Kendrick Lamar"],
    album: "DAMN.",
    duration: "3:47"
  },
  {
    id: 1,
    albumId: 19,
    title: "Always",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Cross Road",
    duration: "5:53"
  },
  {
    id: 2,
    albumId: 19,
    title: "November Rain",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Use Your Illusion I",
    duration: "8:57"
  },
  {
    id: 3,
    albumId: 19,
    title: "Bed of Roses",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Keep the Faith",
    duration: "6:34"
  },
  {
    id: 4,
    albumId: 19,
    title: "Sweet Child o' Mine",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Appetite for Destruction",
    duration: "5:55"
  },
  {
    id: 5,
    albumId: 19,
    title: "Livin' on a Prayer",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Slippery When Wet",
    duration: "4:09"
  },
  {
    id: 6,
    albumId: 19,
    title: "Don't Cry",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Use Your Illusion I",
    duration: "4:45"
  },
  {
    id: 7,
    albumId: 19,
    title: "I'll Be There for You",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "New Jersey",
    duration: "5:46"
  },
  {
    id: 8,
    albumId: 19,
    title: "Patience",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "G N' R Lies",
    duration: "5:56"
  },
  {
    id: 9,
    albumId: 19,
    title: "It's My Life",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Crush",
    duration: "3:44"
  },
  {
    id: 10,
    albumId: 19,
    title: "Civil War",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Use Your Illusion II",
    duration: "7:42"
  },
  {
    id: 11,
    albumId: 19,
    title: "You Give Love a Bad Name",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Slippery When Wet",
    duration: "3:44"
  },
  {
    id: 12,
    albumId: 19,
    title: "Welcome to the Jungle",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Appetite for Destruction",
    duration: "4:33"
  },
  {
    id: 13,
    albumId: 19,
    title: "Bad Medicine",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "New Jersey",
    duration: "5:16"
  },
  {
    id: 14,
    albumId: 19,
    title: "Paradise City",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Appetite for Destruction",
    duration: "6:46"
  },
  {
    id: 15,
    albumId: 19,
    title: "Wanted Dead or Alive",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Slippery When Wet",
    duration: "5:09"
  },
  {
    id: 16,
    albumId: 19,
    title: "Knockin' on Heaven's Door",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Use Your Illusion II",
    duration: "5:36"
  },
  {
    id: 17,
    albumId: 19,
    title: "Blaze of Glory",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Jon Bon Jovi"],
    album: "Blaze of Glory",
    duration: "5:35"
  },
  {
    id: 18,
    albumId: 19,
    title: "Since I Don't Have You",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "The Spaghetti Incident?",
    duration: "4:20"
  },
  {
    id: 19,
    albumId: 19,
    title: "In These Arms",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Bon Jovi"],
    album: "Keep the Faith",
    duration: "5:19"
  },
  {
    id: 20,
    albumId: 19,
    title: "Sweet Child o' Mine",
    image: "https://i.scdn.co/image/ab67706f000000029759604382619e84182ac523",
    artists: ["Guns N' Roses"],
    album: "Appetite for Destruction",
    duration: "5:55"
  },
  {
    id: 1,
    albumId: 20,
    title: "Purple Haze",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Are You Experienced",
    duration: "2:51"
  },
  {
    id: 2,
    albumId: 20,
    title: "Layla",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Eric Clapton"],
    album: "Layla and Other Assorted Love Songs",
    duration: "7:10"
  },
  {
    id: 3,
    albumId: 20,
    title: "Voodoo Child (Slight Return)",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Electric Ladyland",
    duration: "5:13"
  },
  {
    id: 4,
    albumId: 20,
    title: "Tears in Heaven",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Eric Clapton"],
    album: "Unplugged",
    duration: "4:31"
  },
  {
    id: 5,
    albumId: 20,
    title: "All Along the Watchtower",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Electric Ladyland",
    duration: "4:01"
  },
  {
    id: 6,
    albumId: 20,
    title: "Wonderful Tonight",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Eric Clapton"],
    album: "Slowhand",
    duration: "3:44"
  },
  {
    id: 7,
    albumId: 20,
    title: "Little Wing",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Axis: Bold as Love",
    duration: "2:24"
  },
  {
    id: 8,
    albumId: 20,
    title: "Cocaine",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Eric Clapton"],
    album: "Slowhand",
    duration: "3:41"
  },
  {
    id: 9,
    albumId: 20,
    title: "Hey Joe",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Are You Experienced",
    duration: "3:30"
  },
  {
    id: 10,
    albumId: 20,
    title: "I Shot the Sheriff",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Eric Clapton"],
    album: "461 Ocean Boulevard",
    duration: "4:23"
  },
  {
    id: 11,
    albumId: 20,
    title: "Bold as Love",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Axis: Bold as Love",
    duration: "4:11"
  },
  {
    id: 12,
    albumId: 20,
    title: "Badge",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Cream"],
    album: "Goodbye",
    duration: "2:48"
  },
  {
    id: 13,
    albumId: 20,
    title: "Crossroads - Live at Winterland",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Cream"],
    album: "Wheels of Fire",
    duration: "4:14"
  },
  {
    id: 14,
    albumId: 20,
    title: "Foxy Lady",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Are You Experienced",
    duration: "3:18"
  },
  {
    id: 15,
    albumId: 20,
    title: "White Room",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Cream"],
    album: "Wheels of Fire",
    duration: "4:56"
  },
  {
    id: 16,
    albumId: 20,
    title: "Little Wing - Live at Winterland",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "The Jimi Hendrix Experience (Deluxe Reissue)",
    duration: "3:14"
  },
  {
    id: 17,
    albumId: 20,
    title: "After Midnight",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["J.J. Cale"],
    album: "Naturally",
    duration: "2:52"
  },
  {
    id: 18,
    albumId: 20,
    title: "Sunshine of Your Love",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Cream"],
    album: "Disraeli Gears",
    duration: "4:11"
  },
  {
    id: 19,
    albumId: 20,
    title: "The Wind Cries Mary",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Jimi Hendrix"],
    album: "Are You Experienced",
    duration: "3:21"
  },
  {
    id: 20,
    albumId: 20,
    title: "Cocaine - Live at Hammersmith Odeon",
    image: "https://i2o.scdn.co/image/ab67706c0000cfa37c3e8993f12491a2d7291438",
    artists: ["Eric Clapton"],
    album: "Just One Night",
    duration: "6:52"
  }
];

const $$Astro$a = createAstro();
const $$Time = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Time;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/icons/Time.astro", void 0);

const $$Astro$9 = createAstro();
const $$MusicsTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MusicsTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-gray-500/20"> <thead class=""> <tr class="text-zinc-400 text-sm"> <th class="px-4 py-2 font-light">#</th> <th class="px-4 py-2 font-light">Título</th> <th class="px-4 py-2 font-light">Álbum</th> <th class="px-4 py-2 font-light">${renderComponent($$result, "Time", $$Time, {})}</th> </tr> </thead> <tbody> <tr class="h-[16px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300"> <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">${index + 1}</td> <td class="px-4 py-2 flex gap-3"> <picture class=""> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-11 h-11"> </picture> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </td> <td class="px-4 py-2">${song.album}</td> <td class="px-4 py-2 rounded-tr-lg rounded-br-lg">${song.duration}</td> </tr>`)} </tbody> </table>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/components/MusicsTable.astro", void 0);

const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: {playlist: null, song: null, songs: []},
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic })
}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Pause = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const Play = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" })
  }
);
const VolumeSilence = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen apagado",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" }),
      /* @__PURE__ */ jsx("path", { d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" })
    ]
  }
);
const Volume = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen alto",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" }),
      /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
    ]
  }
);
const CurrentSong = ({ image, title, artists }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 relative overflow-hidden flex-row w-[190px]", children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold block", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/80", children: artists?.join(", ") })
    ] })
  ] });
};
const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  });
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  const formatTime = (time) => {
    if (isNaN(time))
      return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  const duration = audio?.current?.duration ?? 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex text-xs gap-x-2 items-center ", children: [
    /* @__PURE__ */ jsx("span", { className: "text-white/80 w-10 text-right", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [0],
        value: [currentTime],
        max: audio?.current?.duration ?? 0,
        min: 0,
        className: "w-[500px]",
        onValueChange: (value) => {
          audio.current.currentTime = value;
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "text-white/80 w-10 text-left", children: duration ? formatTime(duration) : null })
  ] });
};
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolume = useRef(volume);
  const handleClickVolume = () => {
    if (volume < 0.1) {
      setVolume(previousVolume.current);
    } else {
      previousVolume.current = volume;
      setVolume(0);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2 text-white", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "opacity-70 hover:opacity-100 transition",
        onClick: handleClickVolume,
        children: volume < 0.1 ? /* @__PURE__ */ jsx(VolumeSilence, {}) : /* @__PURE__ */ jsx(Volume, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [50],
        value: [volume * 100],
        max: 100,
        min: 0,
        className: "w-24",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }
      }
    )
  ] });
};
const Player = () => {
  const { isPlaying, setIsPlaying, currentMusic, volume } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src = `/music/${playlist.id}/${playlist.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-row w-full px-2 py-1 z-50", children: [
    /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-2 items-center", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-white rounded-full p-2", onClick: handlePlay, children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "text-black" }) : /* @__PURE__ */ jsx(Play, { className: "text-black" }) }),
      /* @__PURE__ */ jsx(SongControl, { audio: audioRef })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsx(VolumeControl, {}) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
};

const $$Astro$8 = createAstro();
const $$Library = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Library;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/icons/Library.astro", void 0);

const $$Astro$7 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/icons/Home.astro", void 0);

const $$Astro$6 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/icons/Search.astro", void 0);

const $$Astro$5 = createAstro();
const $$SideMenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/components/SideMenuItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$SideMenuCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 mx-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400"> ${artistsString} </span> </div> </a>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/components/SideMenuCard.astro", void 0);

const $$Astro$3 = createAstro();
const $$AsideMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AsideMenu;
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2 overflow-hidden"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$Home, {})} <span>Inicio</span> ` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchIcon", $$Search, {})} <span>Buscar</span> ` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1 overflow-y-auto"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LibraryIcon", $$Library, {})} <span>Tu biblioteca</span> ` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/components/AsideMenu.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex-col flex overflow-y-hidden rounded-lg" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] rounded-lg overflow-y-auto bg-zinc-900" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] h-[74px] flex flex-row justify-center items-center" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-play", "client:component-hydration": "load", "client:component-path": "@/components/Player.jsx", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-play") })} </footer> </div>   </body> </html>`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/layouts/Layout.astro", "self");

const CardPlayButton = ({ id, size = "small" }) => {
  const { isPlaying, currentMusic, setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    setCurrentMusic({ playlist: { id } });
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setIsPlaying(true);
      setCurrentMusic({ playlist, songs, song: songs[0] });
    });
  };
  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400",
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, { className: iconClassName }) : /* @__PURE__ */ jsx(Play, { className: iconClassName })
    }
  );
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class="size-52 flex-none aspect-square"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-fullshadow-lg"${addAttribute(renderTransition($$result2, "447rgqct", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-bold block text-white"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "xqvi2465", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "5hvgcehm", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span class="text-white">${playListSongs.length} canciones</span>,
              3 h aproximadamente
</p> </div> </div> </div> </header> <div class="pl-6 pt-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "client:visible": true, "id": id, "size": "large", "client:component-hydration": "visible", "client:component-path": "@/components/CardPlayButton.jsx", "client:component-export": "CardPlayButton" })} </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-10"></div> <section class="p-6"> ${renderComponent($$result2, "MusicsTable", $$MusicsTable, { "songs": playListSongs })} </section> </div> ` })}`;
}, "C:/Users/PC/Desktop/Dev/Spotify-clone/src/pages/playlist/[id].astro", "self");

const $$file = "C:/Users/PC/Desktop/Dev/Spotify-clone/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, CardPlayButton as C, _id_ as _, allPlaylists as a, playlists as p, songs as s };
