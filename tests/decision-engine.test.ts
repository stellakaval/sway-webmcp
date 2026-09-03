import {describe,expect,it} from 'vitest';
import {addAssessment,newBoard,proposeInsight,swayScore,vote} from '../src/decision-engine';

describe('shared decision engine',()=>{
  it('keeps aesthetic choice with the shopper',()=>{
    const state=vote(newBoard('birthday'),'birthday-fashion','silver-mini');
    expect(state.winners['birthday-fashion']).toBe('silver-mini');
    const assessed=addAssessment(state,'silver-mini');
    expect(assessed.assessments[0].checks.length).toBeGreaterThan(0);
    expect(assessed.winners['birthday-fashion']).toBe('silver-mini');
  });
  it('renormalizes the score when no friend vote exists',()=>{
    const state=addAssessment(vote(newBoard('birthday'),'birthday-fashion','silver-mini'),'silver-mini');
    const score=swayScore(state,'birthday-fashion','silver-mini');
    expect(score.friends).toBeNull();
    expect(score.total).toBeGreaterThan(80);
  });
  it('requires two shopper choices before proposing an insight',()=>{
    const once=vote(newBoard('birthday'),'birthday-fashion','silver-mini');
    expect(()=>proposeInsight(once,'You may prefer structure.','fashion',[once.votes[0].id])).toThrow(/two shopper/i);
    const twice=vote(once,'birthday-beauty','berry-statement');
    const next=proposeInsight(twice,'You may prefer one clear statement.','occasion',twice.votes.map(v=>v.id));
    expect(next.insights[0].status).toBe('pending');
  });
});
