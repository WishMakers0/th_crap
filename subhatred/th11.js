{
    "COMMENT": "This file is NOT auto generated. Please end my suffering   -- Priw8",
    "codecaves": {
        "protection": "0x40",
        "mitoriPatch::data": "00 00 00 43 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00",
        "mitoriPatch::customInstr": "81 F9 E8 02 00 00 0F 84 13 00 00 00 81 F9 E9 02 00 00 0F 84 40 00 00 00 B8 AE 6B 41 00 FF E0 BF <codecave:mitoriPatch::data> 8B 56 04 6A 00 B8 B0 D4 45 00 FF D0 89 47 08 8B 56 04 6A 01 B8 B0 D4 45 00 FF D0 89 47 0C 8B 56 04 6A 02 B8 B0 D4 45 00 FF D0 89 47 10 B8 AE 6B 41 00 FF E0 60 BF <codecave:mitoriPatch::data> 8B 83 14 16 00 00 8B 40 04 31 C9 BE 50 D5 45 00 FF D6 D8 0F DB 5F 04 A1 B4 8E 4A 00 8B 4F 04 89 88 88 08 00 00 8B 83 14 16 00 00 8B 40 04 B9 01 00 00 00 BE 50 D5 45 00 FF D6 D8 0F DB 5F 04 A1 B4 8E 4A 00 8B 4F 04 89 88 8C 08 00 00 61 B8 AE 6B 41 00 FF E0",
        "mitoriPatch::inputMaskFunc": "57 BF <codecave:mitoriPatch::data> 31 C0 40 85 47 08 0F 84 0A 00 00 00 81 25 C0 93 4C 00 3F FF FF FF 85 47 0C 0F 84 0A 00 00 00 81 25 C0 93 4C 00 CF FF FF FF 85 47 10 0F 84 0A 00 00 00 81 25 C0 93 4C 00 F7 FF FF FF 5F C3",
        "mitoriPatch::inputMaskGame": "A3 C0 93 4C 00 50 E8 [codecave:mitoriPatch::inputMaskFunc] 58 A1 C0 93 4C 00 F7 05 80 34 4C 00 00 02 00 00 B9 19 60 43 00 FF E1",
        "mitoriPatch::inputMaskRpy": "89 0D C0 93 4C 00 50 E8 [codecave:mitoriPatch::inputMaskFunc] 58 8B 0D C0 93 4C 00 B8 15 62 43 00 FF E0"
    },
    "binhacks": {
        "mitoriPatch::jumpToCustomInstr": {
            "addr": "Rx12E9D",
            "code": "0F 87 [codecave:mitoriPatch::customInstr]"
        },
        "mitoriPatch::jumpToInputMaskGame": {
            "addr": "Rx36014",
            "code": "E9 [codecave:mitoriPatch::inputMaskGame]"
        },
        "mitoriPatch::jumpToInputMaskRpy": {
            "addr": "Rx3620F",
            "code": "E9 [codecave:mitoriPatch::inputMaskRpy] 90"
        }
    }
}