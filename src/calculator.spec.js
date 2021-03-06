// DO NOT MODIFY THIS FILE,
// UNLESS TO COPY LINES OF TEST IN ORDER
import { Calculator } from "./calculator.js";
import { toSatisfy } from "../helpers/toSatisfy";
expect.extend({ toSatisfy });

test.each`
  order | sequence
  ${1}  | ${""}
`('$order | "$sequence"', ({ sequence }) => {
  // @ts-ignore
  expect(new Calculator()).toSatisfy(sequence);
});

/*
  order | sequence
  ${2}  | ${"[0]                  # display starts on 0"}
  ${3}  | ${"1"}
  ${4}  | ${"1[1]"}
  ${5}  | ${"234567890[234567890]"}
  ${6}  | ${"1+[1]                # plus is addition"}
  ${7}  | ${"1+2[2]"}
  ${8}  | ${"1+2+[3]"}
  ${9}  | ${"1+2+7[7]"}
  ${10} | ${"1+2+79+[82]"}
  ${11} | ${"1+2+79+1=[83]        # equals shows result"}
  ${12} | ${"[0]1[1]+[1]2[2]+[3]7[7]9[79]+[82]1[1]=[83]"}
  ${13} | ${"1x[1]                # times is multiplication"}
  ${14} | ${"1x2[2]"}
  ${15} | ${"1x2x[2]"}
  ${16} | ${"1x2x7[7]"}
  ${17} | ${"1x2x79x[158]"}
  ${18} | ${"1x2x79x1=[158]       # equals computes"}
  ${19} | ${"[0]1[1]x[1]2[2]x[2]7[7]9[79]x[158]1[1]=[158]"}
  ${20} | ${"0x21[21]             # be careful with parseInt"}
  ${21} | ${"0x21=[0]"}
  ${22} | ${"2x3+[6]              # multiplication has priority"}
  ${23} | ${"2x3+7[7]"}
  ${24} | ${"2x3+7=[13]"}
  ${25} | ${"2x3x4+7+3=[34]"}
  ${26} | ${"2+3x[3]"}
  ${27} | ${"2+3x4[4]"}
  ${28} | ${"2+3x4x5[5]"}
  ${29} | ${"2+3x4x5=[62]"}
  ${30} | ${"1+2x3+4x5+6x7+8x9+0=[141]"}
  ${31} | ${"[0]1[1]+[1]2[2]x[2]3[3]+[7]4[4]x[4]5[5]+[27]6[6]x[6]7[7]+[69]8[8]x[8]9[9]+[141]0[0]=[141]"}
  ${32} | ${"±[0]                 # change the sign"}
  ${33} | ${"1±[-1]"}
  ${34} | ${"1±2[-12]"}
  ${35} | ${"±1[1]"}
  ${36} | ${"2+1±=[1]"}
  ${37} | ${"2±+1=[-1]"}
  ${38} | ${"2x3±=[-6]"}
  ${39} | ${"2±x3=[-6]"}
  ${40} | ${"2x3+5±=[1]"}
  ${41} | ${"2+3x5±=[-13]"}
  ${42} | ${"2+3x5±1=[-151]"}
  ${43} | ${"[0]2[2]+[2]3[3]x[3]5[5]±[-5]1[-51]=[-151]"}
  ${44} | ${"1<[1]                # left < right ? 1 : 0"}
  ${45} | ${"1<2[2]"}
  ${46} | ${"1<2<[1]"}
  ${47} | ${"1<2<5<[1]"}
  ${48} | ${"1<2<5<3[3]"}
  ${49} | ${"1<2<5<3=[1]"}
  ${50} | ${"2<1=[0]"}
  ${51} | ${"1<1=[0]              # it is strict comparison"}
  ${52} | ${"1<2<5<3=[1]"}
  ${53} | ${"1<2<5<3±[-3]"}
  ${54} | ${"1<2<5<3±=[0]"}
  ${55} | ${"[0]1[1]<[1]2[2]<[1]5[5]7[57]<[1]3[3]±[-3]=[0]"}
  ${56} | ${"2+3<[5]              # less than has the lowest priority"}
  ${57} | ${"2+3<2[2]"}
  ${58} | ${"2+3<2+[2]"}
  ${59} | ${"2+3<2+9[9]"}
  ${60} | ${"2+3<2+9=[1]"}
  ${61} | ${"7x2<[14]"}
  ${62} | ${"2x7<3[3]"}
  ${63} | ${"2x7<3x[3]"}
  ${64} | ${"2x7<3x2[2]"}
  ${65} | ${"2x7<3x2=[0]"}
  ${66} | ${"2x7+1<[15]"}
  ${67} | ${"2x7+1<0+3x2+10=[1]"}
  ${68} | ${"[0]2[2]x[2]7[7]+[14]1[1]<[15]0[0]+[0]3[3]x[3]2[2]+[6]10[10]=[1]"}
*/
