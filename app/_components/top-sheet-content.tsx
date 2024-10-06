/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import LoadingBar from './top-loading';
import SkeletonStructure from './skeleton-structure';
import FlightList from './flight-lits';
import { bookingData } from '../_constant/sample/booking-data'; // Assuming bookingData contains the airport information
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import FlighSearchComponent from './flight-search-component';

interface TopSheetContentProps {
    selectedFrom: string;
    selectedTo: string;
    departureDate: Date | undefined;
    returnDate: Date | undefined;
}

const TopSheetContent = ({
    selectedFrom,
    selectedTo,
    departureDate,
    returnDate,
}: TopSheetContentProps) => {
    const [firstLine, setFirstLine] = useState(true);
    const [secondLine, setSecondLine] = useState(false);
    const [thirdLine, setThirdLine] = useState(false);
    const [firstDone, setFirstDone] = useState(false);
    const [secondDone, setSecondDone] = useState(false);
    const [thirdDone, setThirdDone] = useState(false);

    // Find the airport details based on the selected codes
    const getAirportName = (code: string) => {
        const airport = bookingData[0].airports.find((airport) => airport.code === code);
        return airport ? `${airport.city} ${airport.name}` : "Unknown Airport"; // Display the city and name of the airport
    };

    useEffect(() => {
        const timers = [
            setTimeout(() => {
                setSecondLine(true);
                setFirstDone(true); // First line done after 5 seconds
            }, 5000),
            setTimeout(() => {
                setThirdLine(true);
                setSecondDone(true); // Second line done after 10 seconds
            }, 10000),
            setTimeout(() => {
                setThirdDone(true); // Third line done after 15 seconds
            }, 15000),
        ];

        // Clean up the timers when the component is unmounted
        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const formatDate = (date: Date | undefined) => {
        if (!date) return "";
        const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="flex flex-col items-center h-full w-full">
            <div className="flex flex-row items-center w-full">
                {/* Rounded Bordered Query Section */}
                <Sheet>
                    <SheetTrigger>
                        <div className="flex flex-row items-center justify-between gap-5 px-3 rounded-3xl border-[1px] border-slate-200 w-[60%] py-2 ml-60">
                            <p className="flex flex-row gap-2 w-[20%]">
                                <span className="font-neueMontrealMedium break-words">{selectedFrom}</span>
                                <span className="text-slate-600 truncate">{getAirportName(selectedFrom)}</span>
                            </p>
                            <div className="bg-slate-300 h-8 w-[2px]" />
                            <p className="flex flex-row gap-2 w-[20%]">
                                <span className="font-neueMontrealMedium">{selectedTo}</span>
                                <span className="text-slate-600 truncate">{getAirportName(selectedTo)}</span>
                            </p>
                            <div className="bg-slate-300 h-8 w-[2px]" />
                            <p className="font-medium font-neueMontrealMedium">
                                {formatDate(departureDate)} - {formatDate(returnDate)}
                            </p>
                            <div className="bg-slate-300 h-8 w-[2px]" />
                            <div className="rounded-full p-2 bg-slate-300">
                                <Search color="#787878" height={20} width={20} />
                            </div>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="top" className="flex flex-col items-center" closeIconPosition="none">
                        <FlighSearchComponent decoration={false} />
                    </SheetContent>
                </Sheet>
                {/* Rounded Bordered Query Section */}
            </div>
            {!thirdDone && <LoadingBar />}
            {thirdDone && <div className="bg-slate-300 w-screen mt-5 pt-[1px]" />}
            {!thirdDone && (
                <SkeletonStructure
                    firstLine={firstLine}
                    secondLine={secondLine}
                    thirdLine={thirdLine}
                    firstDone={firstDone}
                    secondDone={secondDone}
                    thirdDone={thirdDone}
                />
            )}

            {firstDone && secondDone && thirdDone && <FlightList />}
        </div>
    );
};

export default TopSheetContent;
