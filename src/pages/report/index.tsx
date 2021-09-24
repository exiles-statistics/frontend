import {FC} from "react";
import {Hero} from "components/common/hero";
import * as React from "react";

export const Report: FC<{}> = props => {
  return (
    <>
      <Hero
        depressed
        title={
          <>
            汇报{ <br /> }掉落情况
          </>
        }
        subtitle={
          "汇报掉落情况以完善全站数据集并提升样本准确度"
        }
      />
    </>
  )
}