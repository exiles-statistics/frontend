import {FC} from "react";
import {Hero} from "components/common/hero";
import * as React from "react";
import {RouteComponentProps} from "@reach/router";
import {UnderDevelopment} from "components/common/under-development";

export const MaterialResultPage: FC<RouteComponentProps> = props => {
  return (
    <>
      <Hero
        depressed
        title={
          <>
            素材{ <br /> }掉率统计
          </>
        }
        subtitle={
          "使用下方的素材筛选器、并点选相关素材，即可查询对应素材的掉率情况"
        }
      />

      <UnderDevelopment />
    </>
  )
}