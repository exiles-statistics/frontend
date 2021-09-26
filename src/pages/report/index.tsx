import {FC} from "react";
import {Hero} from "components/common/hero";
import * as React from "react";
import {RouteComponentProps} from "@reach/router";
import {UnderDevelopment} from "components/common/under-development";

export const ReportPage: FC<RouteComponentProps> = props => {
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

      <UnderDevelopment />
    </>
  )
}