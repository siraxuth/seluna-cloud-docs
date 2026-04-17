import { Button } from '@/components/ui/button';
import Discord from '@/components/ui/icons/discord';
import { GridLayout } from '@/components/ui/grid-layout';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <GridLayout
            crosshairs={{
                topLeft: true,
                bottomRight: true,
            }}
            lineVariant="none"
            className=" p-8 max-w-7xl mx-auto rounded-lg "
        >
            <div className="space-y-8">
                <div>
                    <h2 className="text-xl font-medium tracking-tight">
                        Made with 🌙 by{" "}
                        <Link href="https://sirayuth.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            sirayuth
                        </Link>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-xl">
                        Copyright © 2022–2026{" "}
                        <Link href="https://pranakorn.in.th" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline">
                            Pranakorn
                        </Link>
                        . All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <Link href="/guide" target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="lg" className="rounded-md shadow-none cursor-pointer">
                            คู่มือการใช้งาน
                            <ArrowUpRight className="!w-5 !h-5 ml-2" />
                        </Button>
                    </Link>
                    {/* <Link href="https://sirayuth.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-md shadow-none cursor-pointer">
                            sirayuth.com
                            <ArrowUpRight className="!w-5 !h-5" />
                        </Button>
                    </Link> */}
                </div>
            </div>
        </GridLayout>
    )
}