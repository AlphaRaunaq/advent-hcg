"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Our Vision", href: "/our-vision" },
      { label: "Advent Team", href: "/team" },
      { label: "Value Proposition", href: "/value-proposition" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Delivery Model", href: "/delivery-model" },
      { label: "Learn N Heal", href: "/learn-heal" },
      { label: "Hyperbaric India", href: "/hyperb