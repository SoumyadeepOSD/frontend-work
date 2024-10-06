/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { BiDirectionArrowImage } from "../_constant/images/images";
import { Calendar as CalendarIcon, LocateFixedIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingData } from "../_constant/sample/booking-data";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import TopSheetContent from "../_components/top-sheet-content";


const FlighSearchComponent = ({decoration}:{decoration:boolean}) => {
    const [selectedFrom, setSelectedFrom] = useState("");
    const [selectedTo, setSelectedTo] = useState("");
    const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined); // Set initial state to undefined
    const [returnDate, setReturnDate] = useState<Date | undefined>(undefined); // Set initial state to undefined
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleFromChange = (code: string) => {
        setSelectedFrom(code);
    };

    const handleToChange = (code: string) => {
        setSelectedTo(code);
    };

    if (isClient)
        return (
            <section className={`w-[68%] mt-10 border-2 p-5 ${decoration ? "border-slate-200" : "border-white"}  rounded-xl`}>
                <div>
                    {decoration&&<div className="bg-slate-100 w-fit px-10 py-2 rounded-lg text-black font-neueMontrealMedium">
                        Flights
                    </div>}
                    <div className="flex flex-row items-center justify-between my-7">
                        <div className="flex flex-row items-start justify-start w-full">
                            {/* From Airport Dropdown */}
                            <Select onValueChange={handleFromChange}>
                                <SelectTrigger className="w-[230px] py-7 flex flex-row">
                                    <div className="flex flex-row items-center gap-2">
                                        <LocateFixedIcon color="#D9D6D6" />
                                        <SelectValue placeholder="Where from?" className="text-slate-400" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    {bookingData[0].airports.map((airport) => (
                                        <SelectItem key={airport.code} value={airport.code}>
                                            <span className="flex flex-row gap-2">
                                            <span className="font-neueMontrealMedium">{airport.code}</span>                                            
                                            <span className="font-neueMontreal text-slate-500">{airport.city}</span>
                                            </span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Image
                                src={BiDirectionArrowImage}
                                alt="arrowImage"
                                width={50}
                                height={50}
                                className="mx-5"
                            />

                            {/* To Airport Dropdown */}
                            <Select onValueChange={handleToChange}>
                                <SelectTrigger className="w-[230px] py-7">
                                    <div className="flex flex-row items-center gap-2">
                                        <LocateFixedIcon color="#D9D6D6" />
                                        <SelectValue placeholder="Where to?" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    {bookingData[0].airports.map((airport) => (
                                        <SelectItem key={airport.code} value={airport.code}>
                                             <span className="flex flex-row gap-2">
                                            <span className="font-neueMontrealMedium">{airport.code}</span>                                            
                                            <span className="font-neueMontreal text-slate-500">{airport.city}</span>
                                            </span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <section className="flex flex-row items-center ml-10 gap-5">
                                {/* Departure Date - Using Popover for calendar */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button className="w-[180px] py-7 flex items-center justify-start" variant="outline">
                                            <CalendarIcon color="#D9D6D6" height={20} width={20} />
                                            <span className="ml-2">
                                                {/* Show 'Departure' as placeholder when no date is selected */}
                                                {departureDate ? departureDate.toLocaleDateString() : "Departure"}
                                            </span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-2">
                                        <Calendar
                                            mode="single"
                                            selected={departureDate}
                                            onSelect={setDepartureDate}
                                            className="rounded-md border"
                                        />
                                    </PopoverContent>
                                </Popover>

                                {/* Return Date - Using Popover for calendar */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button className="w-[180px] py-7 flex items-center justify-start" variant="outline">
                                            <CalendarIcon color="#D9D6D6" height={20} width={20} />
                                            <span className="ml-2">
                                                {/* Show 'Return' as placeholder when no date is selected */}
                                                {returnDate ? returnDate.toLocaleDateString() : "Return"}
                                            </span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-2 bg-white">
                                        <Calendar
                                            mode="single"
                                            selected={returnDate}
                                            onSelect={setReturnDate}
                                            className="rounded-md border bg-white text-black" // Apply white background and black text
                                        />

                                    </PopoverContent>
                                </Popover>
                            </section>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-row items-center justify-end">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="bg-[#003E39] flex flex-row items-center gap-2 px-10" disabled={!selectedFrom || !selectedTo || !departureDate || !returnDate}>
                                    <Search height={15} width={15} color="white" />
                                    <p className="text-white">Search flights</p>
                                </Button>
                            </SheetTrigger>
                            {selectedFrom&&selectedTo&&departureDate&&returnDate&&<SheetContent side="top" className="h-full">
                                <TopSheetContent 
                                    selectedFrom={selectedFrom} 
                                    selectedTo={selectedTo}
                                    departureDate={departureDate}
                                    returnDate={returnDate}
                                />
                            </SheetContent>}
                        </Sheet>
                    </div>
                </div>
            </section>
        );
};

export default FlighSearchComponent;
