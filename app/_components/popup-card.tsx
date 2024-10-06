"use client";
import { Card } from "@/components/ui/card";
import { AirPlaneGif, CircularAnimationImage, DoneImage } from "../_constant/images/images";
import Image from "next/image";

interface PopupCardProps {
    firstLine: boolean;
    secondLine: boolean;
    thirdLine: boolean;
    firstDone: boolean;
    secondDone: boolean;
    thirdDone: boolean;
}

const PopupCard = ({ firstLine, secondLine, thirdLine, firstDone, secondDone, thirdDone }: PopupCardProps) => {
    return (
        <Card className="absolute top-5 left-auto w-[20%] h-[50%] p-10 flex flex-col items-center justify-center">
            <Image src={AirPlaneGif} alt="my gif" height={100} width={100} />
            <ul className="list-none flex flex-col gap-3">

                {/* First Line */}
                <li className="flex flex-row items-start gap-2">
                    {/* Show circular progress for first line when not done */}
                    {!firstDone ? (
                        <Image unoptimized src={CircularAnimationImage} alt="loading" height={20} width={20} className="animate-spin" />
                    ) : (
                        <Image unoptimized src={DoneImage} alt="done" height={20} width={20} />
                    )}
                    <span className={`${firstDone || firstLine ? "text-slate-700" : "text-slate-300"}`}>
                        Searching 400+ flights
                    </span>
                </li>

                {/* Second Line */}
                <li className="flex flex-row items-start gap-2">
                    {/* Spacer div to maintain alignment when no icon is present */}
                    {!secondDone && !firstDone ? (
                        <div style={{ width: 20, height: 20 }}></div>
                    ) : (
                        <>
                            {!secondDone && firstDone && (
                                <Image unoptimized src={CircularAnimationImage} alt="loading" height={20} width={20} className="animate-spin" />
                            )}
                            {secondDone && (
                                <Image unoptimized src={DoneImage} alt="done" height={20} width={20} />
                            )}
                        </>
                    )}
                    <span className={`${secondDone || (firstDone && secondLine) ? "text-slate-700" : "text-slate-300"}`}>
                        Attaching company rules
                    </span>
                </li>

                {/* Third Line */}
                <li className="flex flex-row items-start gap-2">
                    {/* Spacer div to maintain alignment when no icon is present */}
                    {!thirdDone && !secondDone ? (
                        <div style={{ width: 20, height: 20 }}></div>
                    ) : (
                        <>
                            {!thirdDone && secondDone && (
                                <Image unoptimized src={CircularAnimationImage} alt="loading" height={20} width={20} className="animate-spin" />
                            )}
                            {thirdDone && (
                                <Image unoptimized src={DoneImage} alt="done" height={20} width={20} />
                            )}
                        </>
                    )}
                    <span className={`${thirdDone || (secondDone && thirdLine) ? "text-slate-700" : "text-slate-300"}`}>
                        Serving best results
                    </span>
                </li>

            </ul>
        </Card>
    );
}

export default PopupCard;
