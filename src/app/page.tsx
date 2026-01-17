"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const click = () => {
    console.log('click')
  }
  return (
    <div className="flex justify-center pt-40">
      
      <div className="flex flex-col gap-2 w-2/8 border-black border p-6 rounded-2xl">
      <div>
        <div className="bg-background text-foreground">
  Текст
</div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme}
        </Button>
      </div>
        <h1 className="text-center">LOOKINFITNESS</h1>
        <h2 className="text-xl font-semibold text-center">Вход в аккаунт</h2>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <Label>Логин</Label>
            <Input placeholder="Введите логин" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Пароль</Label>
            <Input placeholder="Введите пароль" />
          </div>
          <Button onClick={click}>Войти</Button>
        </div>
        <div className="">
          <p className="text-center">
            Еще нет аккаунта?<Button variant="link">Зарегистрироваться</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
