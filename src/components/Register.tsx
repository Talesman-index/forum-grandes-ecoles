"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import BgPattern from "./BgPattern";

const formSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Numéro de téléphone requis"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitted(true);
  };

  return (
    <section id="register" className="bg-jicom-red py-24 md:py-40 relative overflow-hidden">
      <BgPattern color="white" opacity={0.09} />
      {/* Decorative large text background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
        <span className="text-display text-[20rem] md:text-[40rem] text-white">JOIN</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white">
            <span className="text-meta text-[0.85rem] text-jicom-yellow block mb-6">
              — Inscription Gratuite
            </span>
            <h2 className="text-display mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>
              Réservez<br />votre <span className="text-jicom-yellow">place.</span>
            </h2>
            <div className="space-y-6 max-w-md">
              <div className="flex gap-4 items-start">
                <div className="text-display w-12 h-12 bg-white/10 flex items-center justify-center text-jicom-yellow shrink-0">01</div>
                <p className="text-label text-[0.85rem] tracking-widest normal-case font-bold leading-relaxed">Accès illimité aux stands de toutes les écoles présentes.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-display w-12 h-12 bg-white/10 flex items-center justify-center text-jicom-yellow shrink-0">02</div>
                <p className="text-label text-[0.85rem] tracking-widest normal-case font-bold leading-relaxed">Participation gratuite à toutes les conférences et panels.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-display w-12 h-12 bg-white/10 flex items-center justify-center text-jicom-yellow shrink-0">03</div>
                <p className="text-label text-[0.85rem] tracking-widest normal-case font-bold leading-relaxed">Possibilité de rendez-vous 1:1 (sous réserve de disponibilité).</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-16 shadow-[30px_30px_0px_0px_#FFB800]">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-jicom-green text-white rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-display text-[2rem] text-jicom-dark mb-4">C'est fait !</h3>
                <p className="text-label text-[1rem] tracking-widest normal-case text-jicom-dark/60 font-bold leading-relaxed">
                  Votre invitation a été envoyée par email. On se voit le 15 Novembre !
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-meta text-[0.85rem] mt-10 text-jicom-red underline">Inscrire une autre personne</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroupJicom label="Prénom" id="firstName" register={register("firstName")} error={errors.firstName?.message} />
                  <InputGroupJicom label="Nom" id="lastName" register={register("lastName")} error={errors.lastName?.message} />
                </div>
                <InputGroupJicom label="Email Professionnel ou Étudiant" id="email" type="email" register={register("email")} error={errors.email?.message} />
                <InputGroupJicom label="Numéro de Téléphone (WhatsApp)" id="phone" register={register("phone")} error={errors.phone?.message} />

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-[60px] bg-[#E8001D] text-white font-black text-[1rem] tracking-[0.12em] uppercase hover:bg-[#c0001a] transition-colors flex items-center justify-center mt-4"
                >
                  {isSubmitting ? "TRAITEMENT..." : "Confirmer mon inscription →"}
                </button>
                <p className="text-meta text-[0.8rem] text-jicom-dark/40 text-center !tracking-normal">
                  En vous inscrivant, vous acceptez nos conditions générales et notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function InputGroupJicom({ label, id, type = "text", register, error }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.8rem] font-bold tracking-[0.08em] uppercase text-[#E8001D]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        className="w-full h-[52px] px-4 bg-white border border-[#e0e0e0] text-[1rem] font-normal text-[#1a0608] placeholder:text-[#aaa] placeholder:font-normal focus:outline-none focus:border-[#E8001D] transition-colors"
        placeholder={`Votre ${label.toLowerCase()}`}
      />
      {error && <span className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-white bg-[#E8001D] mt-1 px-2 py-1 self-start">{error}</span>}
    </div>
  );
}
